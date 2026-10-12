
"use client";

export default function ProductShareButton({ title, description, url }) {
  async function handleShare() {
    const shareUrl =
      typeof window !== "undefined"
        ? new URL(url, window.location.origin).href
        : url;

    const shareData = { title, text: description, url: shareUrl };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareUrl);
        alert("Product link copied!");
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        try {
          if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(shareUrl);
            alert("Product link copied!");
          } else {
            alert("Unable to share this link. Please try again.");
          }
        } catch {
          alert("Unable to share this link. Please try again.");
        }
      }
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label={`Share ${title}`}
      title="Share product"
      className="inline-flex h-10 w-10 items-center justify-center
        rounded-full border border-brand-brown/15 bg-white
        text-brand-charcoal transition hover:bg-brand-cream
        focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.6 10.5 6.8-4" />
        <path d="m8.6 13.5 6.8 4" />
      </svg>
    </button>
  );
}
