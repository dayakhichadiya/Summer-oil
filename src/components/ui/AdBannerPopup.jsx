"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SHOW_DELAY = 3000; // popup kyare khule (ms)
const AUTO_CLOSE = 12000; // auto band thava no time (ms)
const EXIT_DURATION = 300; // close animation time (ms)
const STORAGE_KEY = "samar-ad-popup-seen";
const WHATSAPP_NUMBER = "919724532525";
const WHATSAPP_TEXT = "નમસ્તે, મને સમર સિંગ તેલના પેક વિશે વધુ માહિતી મેળવવી છે.";

export default function AdBannerPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [imageReady, setImageReady] = useState(false);
  const [paused, setPaused] = useState(false);

  const closeBtnRef = useRef(null);
  const dialogRef = useRef(null);
  const previousFocusRef = useRef(null);
  const closeTimerRef = useRef(null);

  // Image preload -> flicker vagar popup dekhay
  useEffect(() => {
    const img = new window.Image();
    img.src = "/images/adBanner.png";
    img.onload = () => setImageReady(true);
    img.onerror = () => setImageReady(true);
  }, []);

  // Open after delay (session ma ek j vaar)
  useEffect(() => {
    if (!imageReady) return undefined;

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* storage blocked hoy to ignore */
    }
    if (alreadySeen) return undefined;

    const timer = window.setTimeout(() => {
      previousFocusRef.current = document.activeElement;
      setIsOpen(true);
    }, SHOW_DELAY);

    return () => window.clearTimeout(timer);
  }, [imageReady]);

  const close = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      previousFocusRef.current?.focus?.();
    }, EXIT_DURATION);
  }, [isClosing]);

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

  // Esc key, scroll lock, focus trap
  useEffect(() => {
    if (!isOpen) return undefined;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    closeBtnRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
    };
  }, [isOpen, close]);

  // Auto close (hover/touch par pause)
  useEffect(() => {
    if (!isOpen || isClosing || paused) return undefined;
    const timer = window.setTimeout(close, AUTO_CLOSE);
    return () => window.clearTimeout(timer);
  }, [isOpen, isClosing, paused, close]);

  if (!isOpen) return null;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_TEXT
  )}`;

  return (
    <div
      className={`ad-popup-backdrop fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6 ${
        isClosing ? "is-closing" : ""
      }`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Samar Singtel advertisement"
        className={`ad-popup-card relative flex flex-col items-center ${
          isClosing ? "is-closing" : ""
        }`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
      >
        {/* Close button */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={close}
          aria-label="Close advertisement"
          className="ad-popup-close absolute right-2 top-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-black/60 text-white shadow-lg backdrop-blur-md transition duration-300 hover:rotate-90 hover:scale-110 hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:-right-4 sm:-top-4"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* Image wrapper */}
        <div className="ad-popup-frame relative overflow-hidden rounded-2xl">
          <img
            src="/images/adBanner.png"
            alt="Samar Singtel cold pressed groundnut oil advertisement"
            draggable={false}
            className="block max-h-[78svh] max-w-[92vw] object-contain sm:max-h-[80svh]"
          />
          <span className="ad-popup-shine" aria-hidden="true" />

          {/* Auto-close progress bar */}
          <span className="ad-popup-progress-track" aria-hidden="true">
            <span
              className="ad-popup-progress-bar"
              style={{
                animationDuration: `${AUTO_CLOSE}ms`,
                animationPlayState: paused || isClosing ? "paused" : "running",
              }}
            />
          </span>
        </div>

        {/* CTA */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="ad-popup-cta mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5b] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-base"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.5 3.5A11.8 11.8 0 0012 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 005.6 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3zM12 21.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.800 1 1-3.700-.2-.4a9.800 9.800 0 01-1.500-5.200C2.100 6.500 6.600 2 12 2c2.600 0 5.100 1 6.900 2.900a9.700 9.700 0 012.900 6.900c0 5.400-4.400 9.900-9.800 9.900zm5.400-7.400c-.3-.1-1.800-.9-2-1-.3-.1-.5-.1-.7.1l-1 1.200c-.2.200-.4.200-.6.100-.3-.1-1.200-.4-2.300-1.400-.9-.8-1.400-1.700-1.600-2-.2-.3 0-.5.100-.6l.5-.5.300-.5c.1-.2 0-.4 0-.5l-.9-2.200c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.300-1 1-1 2.500s1.100 2.900 1.200 3.100c.2.200 2.200 3.400 5.300 4.700.7.300 1.300.5 1.700.6.700.2 1.400.2 1.900.1.600-.1 1.800-.7 2-1.400.3-.7.3-1.300.2-1.400-.1-.1-.3-.2-.6-.3z" />
          </svg>
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}