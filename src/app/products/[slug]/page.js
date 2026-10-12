import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { images } from "@/config/images";
import { productConfig } from "@/config/product";
import { siteConfig } from "@/config/site";

function getProduct(slug) {
  const size = productConfig.sizes.find((item) => item.slug === slug);
  if (!size) return null;
  return { size, photo: images.productSizes[size.label] };
}

export function generateMetadata({ params }) {
  const product = getProduct(params.slug);
  if (!product) return {};
  const { size, photo } = product;
  const title = `${size.title} - ${size.label}`;
  const imageUrl = new URL(photo.src, siteConfig.url).href;
  const pageUrl = new URL(`/products/${size.slug}`, siteConfig.url).href;

  return {
    title,
    description: size.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      url: pageUrl,
      title,
      description: size.description,
      siteName: siteConfig.brand.name,
      images: [{ url: imageUrl, alt: photo.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: size.description,
      images: [imageUrl],
    },
  };
}

export default function SharedProductPage({ params }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  const { size, photo } = product;

  return (
    <main className="min-h-screen bg-brand-cream px-4 py-12 text-brand-charcoal">
      <article className="mx-auto grid max-w-5xl items-center gap-8 rounded-3xl bg-brand-cream-soft p-6 shadow-card sm:p-10 md:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-white">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority
            sizes="(max-width: 767px) 90vw, 420px"
            className="object-contain p-5"
          />
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand-brown/70">
            Samar Singtel Groundnut Oil
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {size.title}
          </h1>
          <p className="mt-3 font-semibold text-brand-green">{size.label}</p>
          <p className="mt-4 leading-7 text-brand-charcoal/75">
            {size.description}
          </p>
          <Link
            href="/#products"
            className="mt-7 inline-flex rounded-full bg-brand-brown px-6 py-3 font-medium text-white transition hover:bg-brand-brown/90"
          >
            View all products
          </Link>
        </div>
      </article>
    </main>
  );
}
