"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product } from "../../mock-store-data";

type ProductGalleryProps = {
  product: Product;
};

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M11 6l-6 6 6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProductVisual({
  product,
  variant,
  compact = false,
}: {
  product: Product;
  variant: number;
  compact?: boolean;
}) {
  const accentStyle = { backgroundColor: product.palette.accent };
  const glowStyle = { backgroundColor: product.palette.glow };
  const shellHeight = compact ? "min-h-[148px]" : "min-h-[620px]";
  const shellRadius = compact ? "rounded-[1.4rem]" : "rounded-[2.6rem]";
  const shellPadding = compact ? "p-2.5" : "p-4";
  const baseClass = `relative h-full overflow-hidden border border-[#edf1fb] bg-[#f8fbff] ${shellRadius} ${shellHeight} ${shellPadding}`;
  const offsetClass =
    variant === 0
      ? ""
      : variant === 1
        ? "[&_.product-figure]:scale-[0.95] [&_.product-figure]:rotate-[3deg] [&_.product-figure]:translate-y-2"
        : variant === 2
          ? "[&_.product-figure]:scale-[1.02] [&_.product-figure]:-rotate-[8deg] [&_.product-figure]:-translate-y-1"
          : "[&_.product-figure]:scale-[0.93] [&_.product-figure]:rotate-[7deg] [&_.product-figure]:translate-x-3";

  if (product.kind === "controller" || product.kind === "gamepad") {
    return (
      <div className={`${baseClass} ${offsetClass}`}>
        <div className="absolute left-12 top-10 h-28 w-28 rounded-full blur-3xl" style={glowStyle} />
        <div className="absolute right-12 bottom-12 h-28 w-28 rounded-full bg-white/80 blur-3xl" />
        <div className="product-figure absolute left-1/2 top-1/2 h-44 w-72 -translate-x-1/2 -translate-y-1/2 rounded-[2.8rem] bg-white shadow-[0_30px_55px_rgba(111,131,171,0.16)] transition duration-300" />
        <div className="product-figure absolute left-[8.5rem] top-[15.6rem] h-14 w-14 rounded-full bg-[#edf3ff] transition duration-300" />
        <div className="product-figure absolute right-[8.5rem] top-[15.6rem] h-14 w-14 rounded-full bg-[#edf3ff] transition duration-300" />
        <div className="product-figure absolute left-[7.1rem] top-[17.2rem] h-4 w-4 rounded-full transition duration-300" style={accentStyle} />
        <div className="product-figure absolute left-[8.2rem] top-[16.5rem] h-4 w-4 rounded-full bg-[#1d2437] transition duration-300" />
        <div className="product-figure absolute left-[9.3rem] top-[17.2rem] h-4 w-4 rounded-full bg-[#1d2437] transition duration-300" />
        <div className="product-figure absolute right-[7.9rem] top-[16.6rem] h-6 w-6 rounded-full transition duration-300" style={accentStyle} />
        <div className="product-figure absolute left-1/2 top-[17rem] h-3 w-10 -translate-x-1/2 rounded-full bg-[#d7deec] transition duration-300" />
      </div>
    );
  }

  if (product.kind === "keyboard") {
    return (
      <div className={`${baseClass} ${offsetClass}`}>
        <div className="absolute left-10 top-10 h-28 w-28 rounded-full blur-3xl" style={glowStyle} />
        <div className="absolute right-10 bottom-12 h-28 w-28 rounded-full bg-white/70 blur-3xl" />
        <div className="product-figure absolute left-1/2 top-1/2 h-40 w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-[1.8rem] bg-[#1b2030] shadow-[0_26px_50px_rgba(32,38,57,0.28)] transition duration-300" />
        <div className="product-figure absolute left-1/2 top-1/2 grid w-[23rem] -translate-x-1/2 -translate-y-1/2 grid-cols-10 gap-2 transition duration-300">
          {Array.from({ length: 40 }).map((_, index) => (
            <span
              key={index}
              className="h-5 rounded-[0.45rem]"
              style={{
                backgroundColor:
                  index % 5 === 0
                    ? "#5d8df6"
                    : index % 5 === 1
                      ? "#ff7fa2"
                      : index % 5 === 2
                        ? "#7fdb95"
                        : index % 5 === 3
                          ? "#f4c45f"
                          : "#8f6cf8",
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (product.kind === "camera") {
    return (
      <div className={`${baseClass} ${offsetClass}`}>
        <div className="absolute right-12 top-12 h-32 w-32 rounded-full blur-3xl" style={glowStyle} />
        <div className="product-figure absolute left-1/2 top-1/2 h-44 w-72 -translate-x-1/2 -translate-y-1/2 rounded-[2.2rem] bg-white shadow-[0_30px_55px_rgba(111,131,171,0.16)] transition duration-300" />
        <div className="product-figure absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2b344a] transition duration-300" />
        <div className="product-figure absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-white transition duration-300" />
        <div className="product-figure absolute right-[10.8rem] top-[14rem] h-5 w-5 rounded-full transition duration-300" style={accentStyle} />
      </div>
    );
  }

  if (product.kind === "speaker") {
    return (
      <div className={`${baseClass} ${offsetClass}`}>
        <div className="absolute inset-x-0 top-0 h-32 bg-white/55" />
        <div className="product-figure absolute left-[9.2rem] top-1/2 h-44 w-24 -translate-y-1/2 rounded-[1.4rem] bg-[#31384d] transition duration-300" />
        <div className="product-figure absolute right-[9.2rem] top-1/2 h-44 w-24 -translate-y-1/2 rounded-[1.4rem] bg-[#31384d] transition duration-300" />
        <div className="product-figure absolute left-[10.4rem] top-[14.2rem] h-10 w-10 rounded-full bg-white/20 ring-2 ring-white/40 transition duration-300" />
        <div className="product-figure absolute right-[10.4rem] top-[14.2rem] h-10 w-10 rounded-full bg-white/20 ring-2 ring-white/40 transition duration-300" />
        <div className="product-figure absolute left-[10rem] top-[17.4rem] h-14 w-14 rounded-full bg-white/10 ring-2 ring-white/30 transition duration-300" />
        <div className="product-figure absolute right-[10rem] top-[17.4rem] h-14 w-14 rounded-full bg-white/10 ring-2 ring-white/30 transition duration-300" />
      </div>
    );
  }

  if (product.kind === "smart-speaker") {
    return (
      <div className={`${baseClass} ${offsetClass}`}>
        <div className="absolute left-10 top-10 h-28 w-28 rounded-full blur-3xl" style={glowStyle} />
        <div className="product-figure absolute left-1/2 top-1/2 h-48 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[2.6rem] bg-gradient-to-b from-[#2d364c] to-[#131925] shadow-[0_26px_48px_rgba(22,25,37,0.26)] transition duration-300" />
        <div className="product-figure absolute left-1/2 top-[16.8rem] h-6 w-20 -translate-x-1/2 rounded-full bg-white/20 transition duration-300" />
      </div>
    );
  }

  if (product.kind === "mouse") {
    return (
      <div className={`${baseClass} ${offsetClass}`}>
        <div className="absolute left-10 bottom-10 h-28 w-28 rounded-full blur-3xl" style={glowStyle} />
        <div className="product-figure absolute left-1/2 top-1/2 h-52 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[2.8rem] bg-[#2d3348] shadow-[0_28px_50px_rgba(37,44,67,0.24)] transition duration-300" />
        <div className="product-figure absolute left-1/2 top-[14.9rem] h-16 w-1 -translate-x-1/2 rounded-full bg-white/60 transition duration-300" />
        <div className="product-figure absolute left-1/2 top-[15.8rem] h-12 w-10 -translate-x-1/2 rounded-b-full rounded-t-[0.9rem] bg-[#394159] transition duration-300" />
      </div>
    );
  }

  if (product.kind === "headset") {
    return (
      <div className={`${baseClass} ${offsetClass}`}>
        <div className="absolute inset-x-16 top-10 h-24 rounded-full bg-[#ffdacf]/60 blur-3xl" />
        <div className="product-figure absolute left-1/2 top-[7rem] h-40 w-56 -translate-x-1/2 rounded-[999px] border-[18px] border-[#23283a] border-b-0 transition duration-300" />
        <div className="product-figure absolute left-[8.2rem] top-[15.2rem] h-36 w-36 rounded-full bg-gradient-to-br from-[#424a63] via-[#252b3d] to-[#101420] shadow-[0_26px_40px_rgba(22,25,37,0.24)] transition duration-300" />
        <div className="product-figure absolute right-[8.2rem] top-[15.2rem] h-36 w-36 rounded-full bg-gradient-to-br from-[#3f465e] via-[#252b3d] to-[#101420] shadow-[0_26px_40px_rgba(22,25,37,0.24)] transition duration-300" />
        <div className="product-figure absolute left-[10.5rem] top-[16.2rem] h-20 w-12 rounded-full bg-[#31384d] transition duration-300" />
        <div className="product-figure absolute right-[10.5rem] top-[16.2rem] h-20 w-12 rounded-full bg-[#31384d] transition duration-300" />
        <div className="product-figure absolute left-1/2 top-[11.8rem] h-28 w-20 -translate-x-1/2 rounded-[999px] bg-gradient-to-b from-[#2e3448] to-[#171b28] transition duration-300" />
      </div>
    );
  }

  return (
    <div className={`${baseClass} ${offsetClass}`}>
      <div className="absolute inset-x-20 top-16 h-24 rounded-full blur-3xl" style={glowStyle} />
      <div className="product-figure absolute left-1/2 top-[7.4rem] h-28 w-40 -translate-x-1/2 rounded-[999px] border-[14px] border-[#2a3144] border-b-0 transition duration-300" />
      <div className="product-figure absolute left-[10rem] top-[16.2rem] h-28 w-20 rounded-[2rem] bg-gradient-to-b from-[#3a435d] to-[#171c29] transition duration-300" />
      <div className="product-figure absolute right-[10rem] top-[16.2rem] h-28 w-20 rounded-[2rem] bg-gradient-to-b from-[#3a435d] to-[#171c29] transition duration-300" />
    </div>
  );
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const galleryItems = useMemo(() => [0, 1, 2, 3], []);
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrevious = () => {
    setActiveIndex((current) => (current - 1 + galleryItems.length) % galleryItems.length);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % galleryItems.length);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Link
          href="/"
          className="absolute left-5 top-5 z-20 inline-flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/35 bg-white/18 text-white backdrop-blur-xl shadow-[0_18px_45px_rgba(27,39,84,0.28)] transition hover:scale-[1.03] hover:bg-white/24"
          aria-label="Буцах"
        >
          <ArrowLeftIcon />
        </Link>

        <button
          type="button"
          onClick={goPrevious}
          className="absolute left-5 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#111723] text-white shadow-[0_14px_30px_rgba(17,23,35,0.22)] transition hover:scale-[1.04]"
          aria-label="Өмнөх зураг"
        >
          <ArrowLeftIcon />
        </button>

        <button
          type="button"
          onClick={goNext}
          className="absolute right-5 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#111723] text-white shadow-[0_14px_30px_rgba(17,23,35,0.22)] transition hover:scale-[1.04]"
          aria-label="Дараагийн зураг"
        >
          <ArrowRightIcon />
        </button>

        <ProductVisual product={product} variant={galleryItems[activeIndex]} />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {galleryItems.map((variant, index) => (
          <button
            key={variant}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`overflow-hidden rounded-[1.3rem] border p-1.5 text-left transition ${
              index === activeIndex
                ? "border-[#7d96ff] bg-[#eef3ff] shadow-[0_14px_30px_rgba(84,112,212,0.16)]"
                : "border-[#e6edf8] bg-white hover:border-[#ccd9f6]"
            }`}
            aria-label={`${index + 1}-р зураг`}
          >
            <ProductVisual product={product} variant={variant} compact />
          </button>
        ))}
      </div>
    </div>
  );
}
