"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { categories, heroSlides, products } from "./mock-store-data";

function LogoMark() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4fb7ff] to-[#306bff] shadow-[0_12px_24px_rgba(48,107,255,0.25)]">
      <div className="relative h-4 w-5">
        <div className="absolute inset-y-0 left-0 w-2.5 rounded-r-full bg-white" />
        <div className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white" />
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <circle
        cx="11"
        cy="11"
        r="6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M16 16l4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <circle
        cx="12"
        cy="8"
        r="3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5.5 19c1.8-3.2 4.2-4.8 6.5-4.8s4.7 1.6 6.5 4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M4 6h2l2 9h8l2-6H8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="18" r="1.5" fill="currentColor" />
      <circle cx="17" cy="18" r="1.5" fill="currentColor" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 20s-6.8-4.4-8.6-8A5.3 5.3 0 015.1 5a5 5 0 016.9 1.1A5 5 0 0118.9 5a5.3 5.3 0 011.7 7c-1.8 3.6-8.6 8-8.6 8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
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

function DeviceIcon({ kind }: { kind: (typeof categories)[number]["kind"] }) {
  const base = "h-7 w-7 text-[#3772ff]";

  if (kind === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={base}>
        <rect
          x="7"
          y="3.5"
          width="10"
          height="17"
          rx="2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="17.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (kind === "computer") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={base}>
        <rect
          x="4"
          y="5"
          width="16"
          height="10"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 19h6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "accessory") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={base}>
        <path
          d="M6 10h12v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 10V7a3 3 0 016 0v3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (kind === "laptop") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={base}>
        <rect
          x="5"
          y="5"
          width="14"
          height="9"
          rx="1.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3.5 17.5h17"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "audio") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={base}>
        <path
          d="M7.5 14.5a3 3 0 01-3-3V11a7.5 7.5 0 0115 0v.5a3 3 0 01-3 3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect
          x="5"
          y="13.5"
          width="3.5"
          height="5"
          rx="1.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <rect
          x="15.5"
          y="13.5"
          width="3.5"
          height="5"
          rx="1.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (kind === "network") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={base}>
        <path
          d="M5 15a10 10 0 0114 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M8 12a6 6 0 018 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M11 9a2 2 0 012 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={base}>
      <path
        d="M7 9l-3 2v4l3 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 9l3 2v4l-3 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 9l5-3 5 3v6l-5 3-5-3V9z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeadsetHeroVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#fff4ef] via-[#fffdfc] to-[#eef4ff]">
      <div className="absolute inset-x-16 top-10 h-24 rounded-full bg-[#ffdacf]/60 blur-3xl" />
      <div className="absolute right-[10%] top-1/2 h-64 w-80 -translate-y-1/2 rounded-[3rem] bg-white/55 blur-[2px]" />
      <div className="absolute right-[12%] top-1/2 h-64 w-80 -translate-y-1/2">
        <div className="absolute left-1/2 top-1 h-28 w-44 -translate-x-1/2 rounded-[999px] border-[16px] border-[#23283a] border-b-0" />
        <div className="absolute left-5 top-24 h-28 w-28 rounded-full bg-gradient-to-br from-[#424a63] via-[#252b3d] to-[#101420] shadow-[0_26px_40px_rgba(22,25,37,0.24)]" />
        <div className="absolute right-5 top-24 h-28 w-28 rounded-full bg-gradient-to-br from-[#3f465e] via-[#252b3d] to-[#101420] shadow-[0_26px_40px_rgba(22,25,37,0.24)]" />
        <div className="absolute left-[3.7rem] top-[6.7rem] h-16 w-10 rounded-full bg-[#31384d]" />
        <div className="absolute right-[3.7rem] top-[6.7rem] h-16 w-10 rounded-full bg-[#31384d]" />
        <div className="absolute left-1/2 top-16 h-24 w-16 -translate-x-1/2 rounded-[999px] bg-gradient-to-b from-[#2e3448] to-[#171b28]" />
      </div>
    </div>
  );
}

function KeyboardHeroVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#f4f8ff] via-[#fffefc] to-[#eef3ff]">
      <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-[#d7e4ff]/80 blur-3xl" />
      <div className="absolute right-8 bottom-8 h-24 w-24 rounded-full bg-[#f7c6de]/55 blur-3xl" />
      <div className="absolute right-[10%] top-1/2 h-32 w-[22rem] -translate-y-1/2 -rotate-6 rounded-[1.5rem] bg-[#1b2030] shadow-[0_24px_46px_rgba(32,38,57,0.28)]" />
      <div className="absolute right-[12%] top-1/2 grid w-[18rem] -translate-y-1/2 -rotate-6 grid-cols-10 gap-1.5">
        {Array.from({ length: 40 }).map((_, index) => (
          <span
            key={index}
            className="h-4 rounded-[0.4rem]"
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

function HeroVisual({ slide }: { slide: (typeof heroSlides)[number] }) {
  if (slide.visual === "store") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#edf3ff]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_32%)]" />
        <div className="absolute inset-0 px-4 py-5 sm:px-6 sm:py-6">
          <div className="flex h-full items-center justify-center rounded-[2rem] bg-white/28 p-3 backdrop-blur-[2px]">
            <Image
              src="/kherlens-home-store.jpg"
              alt="Хэрлэнгийн дэлгүүрийн hero баннер"
              width={2048}
              height={1069}
              priority
              sizes="100vw"
              className="h-full max-h-[420px] w-full rounded-[1.5rem] object-contain"
            />
          </div>
        </div>
      </div>
    );
  }

  if (slide.visual === "keyboard") {
    return <KeyboardHeroVisual />;
  }

  return <HeadsetHeroVisual />;
}

function HeroArt({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-white shadow-[0_28px_60px_rgba(38,69,145,0.12)]">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {heroSlides.map((slide) => (
          <article
            key={slide.id}
            className="relative min-h-[460px] min-w-full overflow-hidden sm:min-h-[500px] lg:min-h-[540px]"
          >
            <HeroVisual slide={slide} />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.82)_30%,rgba(255,255,255,0.12)_62%,rgba(255,255,255,0)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/35 to-transparent" />

            <div className="relative z-10 flex h-full items-center px-6 py-8 sm:px-8 lg:px-10">
              <div className="max-w-[38rem] rounded-[2rem] border border-white/60 bg-white/42 p-6 shadow-[0_18px_40px_rgba(31,57,128,0.10)] backdrop-blur-md sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f28379]">
                  {slide.eyebrow}
                </p>
                <h1 className="mt-4 max-w-xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-[#14213d] sm:text-6xl">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-lg text-base leading-8 text-[#657493]">
                  {slide.description}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3772ff] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(55,114,255,0.24)] transition hover:bg-[#245ff4]">
                    {slide.primaryCta}
                    <ArrowRight />
                  </button>

                  <div className="rounded-full bg-white px-5 py-3 shadow-[0_12px_30px_rgba(68,92,146,0.08)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9aa8c0]">
                      {slide.secondaryLabel}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-[#16203b]">
                      {slide.secondaryValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/55 px-3 py-2 backdrop-blur-md">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            className={`h-2.5 rounded-full transition-all ${
              activeIndex === index
                ? "w-10 bg-[#3772ff]"
                : "w-2.5 bg-[#c7d6f8] hover:bg-[#9bb7ff]"
            }`}
            onClick={() => onSelect(index)}
            aria-label={`Слайд ${index + 1} харуулах`}
          />
        ))}
      </div>
    </div>
  );
}

function ProductArt({ product }: { product: (typeof products)[number] }) {
  const accentStyle = { backgroundColor: product.palette.accent };
  const glowStyle = { backgroundColor: product.palette.glow };

  if (product.kind === "controller" || product.kind === "gamepad") {
    return (
      <div
        className={`relative h-56 overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${product.palette.card}`}
      >
        <div
          className="absolute left-8 top-8 h-24 w-24 rounded-full blur-2xl"
          style={glowStyle}
        />
        <div className="absolute right-8 bottom-8 h-20 w-20 rounded-full bg-white/80 blur-2xl" />
        <div className="absolute left-1/2 top-1/2 h-24 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] bg-white shadow-[0_18px_34px_rgba(111,131,171,0.18)]" />
        <div className="absolute left-[5.6rem] top-[5.5rem] h-10 w-10 rounded-full bg-[#edf3ff]" />
        <div className="absolute right-[5.6rem] top-[5.5rem] h-10 w-10 rounded-full bg-[#edf3ff]" />
        <div
          className="absolute left-[4.5rem] top-[6.7rem] h-3 w-3 rounded-full"
          style={accentStyle}
        />
        <div className="absolute left-[5.4rem] top-[6.1rem] h-3 w-3 rounded-full bg-[#1d2437]" />
        <div className="absolute left-[6.3rem] top-[6.7rem] h-3 w-3 rounded-full bg-[#1d2437]" />
        <div
          className="absolute right-[5.2rem] top-[6.2rem] h-5 w-5 rounded-full"
          style={accentStyle}
        />
        <div className="absolute left-1/2 top-[6.4rem] h-2 w-8 -translate-x-1/2 rounded-full bg-[#d7deec]" />
      </div>
    );
  }

  if (product.kind === "keyboard") {
    return (
      <div
        className={`relative h-56 overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${product.palette.card}`}
      >
        <div
          className="absolute left-10 top-10 h-20 w-20 rounded-full blur-2xl"
          style={glowStyle}
        />
        <div className="absolute left-1/2 top-1/2 h-24 w-56 -translate-x-1/2 -translate-y-1/2 -rotate-6 rounded-[1.25rem] bg-[#1b2030] shadow-[0_18px_36px_rgba(32,38,57,0.28)]" />
        <div className="absolute left-1/2 top-1/2 grid w-48 -translate-x-1/2 -translate-y-1/2 -rotate-6 grid-cols-8 gap-1">
          {Array.from({ length: 24 }).map((_, index) => (
            <span
              key={index}
              className="h-4 rounded-[0.35rem]"
              style={{
                backgroundColor:
                  index % 4 === 0
                    ? "#5d8df6"
                    : index % 4 === 1
                      ? "#ff7fa2"
                      : index % 4 === 2
                        ? "#7fdb95"
                        : "#f4c45f",
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (product.kind === "camera") {
    return (
      <div
        className={`relative h-56 overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${product.palette.card}`}
      >
        <div
          className="absolute right-10 top-10 h-20 w-20 rounded-full blur-2xl"
          style={glowStyle}
        />
        <div className="absolute left-1/2 top-1/2 h-24 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[1.6rem] bg-white shadow-[0_18px_34px_rgba(126,144,177,0.2)]" />
        <div className="absolute left-1/2 top-1/2 h-18 w-18 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2b344a]" />
        <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white" />
        <div
          className="absolute right-[4.9rem] top-[4.7rem] h-4 w-4 rounded-full"
          style={accentStyle}
        />
      </div>
    );
  }

  if (product.kind === "speaker") {
    return (
      <div
        className={`relative h-56 overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${product.palette.card}`}
      >
        <div className="absolute inset-x-0 top-0 h-24 bg-white/55" />
        <div className="absolute left-[3.9rem] top-1/2 h-28 w-16 -translate-y-1/2 rounded-[1rem] bg-[#31384d]" />
        <div className="absolute right-[3.9rem] top-1/2 h-28 w-16 -translate-y-1/2 rounded-[1rem] bg-[#31384d]" />
        <div className="absolute left-[4.7rem] top-[4.6rem] h-7 w-7 rounded-full bg-white/20 ring-2 ring-white/40" />
        <div className="absolute right-[4.7rem] top-[4.6rem] h-7 w-7 rounded-full bg-white/20 ring-2 ring-white/40" />
        <div className="absolute left-[4.5rem] top-[6.5rem] h-10 w-10 rounded-full bg-white/10 ring-2 ring-white/30" />
        <div className="absolute right-[4.5rem] top-[6.5rem] h-10 w-10 rounded-full bg-white/10 ring-2 ring-white/30" />
      </div>
    );
  }

  if (product.kind === "smart-speaker") {
    return (
      <div
        className={`relative h-56 overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${product.palette.card}`}
      >
        <div
          className="absolute left-8 top-8 h-24 w-24 rounded-full blur-2xl"
          style={glowStyle}
        />
        <div className="absolute left-1/2 top-1/2 h-28 w-24 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] bg-gradient-to-b from-[#2d364c] to-[#131925] shadow-[0_22px_40px_rgba(22,25,37,0.26)]" />
        <div className="absolute left-1/2 top-[5.3rem] h-4 w-14 -translate-x-1/2 rounded-full bg-white/20" />
      </div>
    );
  }

  if (product.kind === "mouse") {
    return (
      <div
        className={`relative h-56 overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${product.palette.card}`}
      >
        <div
          className="absolute left-10 bottom-10 h-20 w-20 rounded-full blur-2xl"
          style={glowStyle}
        />
        <div className="absolute left-1/2 top-1/2 h-32 w-24 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] bg-[#2d3348] shadow-[0_22px_38px_rgba(37,44,67,0.24)]" />
        <div className="absolute left-1/2 top-[4.4rem] h-12 w-1 -translate-x-1/2 rounded-full bg-white/60" />
        <div className="absolute left-1/2 top-[5rem] h-10 w-8 -translate-x-1/2 rounded-b-full rounded-t-[0.8rem] bg-[#394159]" />
      </div>
    );
  }

  return (
    <div
      className={`relative h-56 overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${product.palette.card}`}
    >
      <div
        className="absolute inset-x-14 top-8 h-16 rounded-full blur-2xl"
        style={glowStyle}
      />
      <div className="absolute left-1/2 top-8 h-20 w-28 -translate-x-1/2 rounded-[999px] border-[10px] border-[#2a3144] border-b-0" />
      <div className="absolute left-[5.4rem] top-[5.2rem] h-20 w-16 rounded-[1.7rem] bg-gradient-to-b from-[#3a435d] to-[#171c29]" />
      <div className="absolute right-[5.4rem] top-[5.2rem] h-20 w-16 rounded-[1.7rem] bg-gradient-to-b from-[#3a435d] to-[#171c29]" />
    </div>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const salePercent =
    product.isSale && product.oldPrice
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100,
        )
      : null;

  return (
    <Link
      href={`/products/${product.id}`}
      className="block rounded-[2rem] border border-[#edf1fb] bg-white p-4 shadow-[0_20px_40px_rgba(25,50,120,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_54px_rgba(25,50,120,0.12)]"
    >
      <div className="hidden">
        <span>{product.category}</span>
        {product.badge ? (
          <span className="rounded-full bg-[#ebf2ff] px-3 py-1 text-[#3772ff]">
            {product.badge}
          </span>
        ) : (
          <span className="rounded-full border border-[#edf1fb] px-3 py-1 text-[#a3afc7]">
            Бэлэн
          </span>
        )}
      </div>

      <div className="relative">
        <ProductArt product={product} />

        {salePercent ? (
          <div className="absolute left-4 top-4 rounded-full border border-white/55 bg-white/28 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#16203b] shadow-[0_10px_28px_rgba(33,54,111,0.12)] backdrop-blur-xl">
            Хямдралтай
          </div>
        ) : product.badge ? (
          <div className="absolute left-4 top-4 rounded-full border border-white/55 bg-white/28 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#16203b] shadow-[0_10px_28px_rgba(33,54,111,0.12)] backdrop-blur-xl">
            {product.badge}
          </div>
        ) : null}
      </div>

      <div className="mt-5">
        <h3 className="text-[1.38rem] font-semibold tracking-[-0.03em] text-[#16203b]">
          {product.name}
        </h3>

        <p className="mt-3 truncate text-sm leading-7 text-[#7c8aa5]">
          {product.description}
        </p>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div className="space-y-1">
            <p className="text-[2rem] font-bold tracking-[-0.03em] text-[#16203b]">
              ${product.price.toFixed(2)}
            </p>
            {product.isSale && product.oldPrice ? (
              <p className="text-sm font-medium text-[#8ea0c4]">
                ${product.oldPrice.toFixed(2)}-с ${product.price.toFixed(2)}
              </p>
            ) : (
              <p className="text-sm text-[#a0adc5]">Одоо бэлэн байгаа</p>
            )}
          </div>

          <span className="inline-flex items-center gap-2 rounded-full bg-[#3772ff] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#245ff4]">
            Дэлгэрэнгүй
            <ArrowRight />
          </span>
        </div>
      </div>
    </Link>
  );
}

function HeaderBar() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <LogoMark />
          <div>
            <p className="font-display text-2xl font-bold tracking-[-0.04em] text-[#14213d]">
              eTrade
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-[#9aa8c0]">
              Цахим дэлгүүр
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#edf1fb] text-[#4b5a7d]"
            aria-label="Хайх"
          >
            <SearchIcon />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#edf1fb] text-[#4b5a7d]"
            aria-label="Хадгалсан"
          >
            <HeartIcon />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#edf1fb] text-[#4b5a7d]"
            aria-label="Сагс"
          >
            <CartIcon />
          </button>
        </div>
      </div>

      <div className="hidden items-center gap-3 lg:flex">
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#edf1fb] text-[#51617f] transition hover:bg-[#f6f9ff]"
          aria-label="Хайх"
        >
          <SearchIcon />
        </button>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#edf1fb] text-[#51617f] transition hover:bg-[#f6f9ff]"
          aria-label="Хадгалсан"
        >
          <HeartIcon />
        </button>

        <button
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#edf1fb] text-[#51617f] transition hover:bg-[#f6f9ff]"
          aria-label="Сагс"
        >
          <CartIcon />
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#3772ff] px-1 text-[10px] font-bold text-white">
            2
          </span>
        </button>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#edf1fb] text-[#51617f] transition hover:bg-[#f6f9ff]"
          aria-label="Хэрэглэгч"
        >
          <UserIcon />
        </button>
      </div>
    </div>
  );
}

const productTabs = [
  { id: "all", label: "Бүх бараа" },
  { id: "sale", label: "Хямдралтай" },
  { id: "new", label: "Шинээр ирсэн" },
] as const;

export default function Home() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [activeProductTab, setActiveProductTab] =
    useState<(typeof productTabs)[number]["id"]>("all");

  useEffect(() => {
    const onScroll = () => {
      setShowStickyHeader(window.scrollY > 180);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const visibleProducts =
    activeProductTab === "sale"
      ? products.filter((product) => product.isSale)
      : activeProductTab === "new"
        ? products.filter((product) => product.isNew)
        : products;

  return (
    <main className="min-h-screen px-4 py-5 sm:px-6 lg:px-8">
      <div
        className={`pointer-events-none fixed inset-x-0 top-3 z-50 px-4 transition duration-300 sm:top-4 sm:px-6 lg:px-8 ${
          showStickyHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-6 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1440px]">
          <header className="pointer-events-auto relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/48 px-5 py-4 shadow-[0_24px_60px_rgba(44,87,181,0.16)] ring-1 ring-white/35 backdrop-blur-2xl backdrop-saturate-150 sm:px-8">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.66),rgba(255,255,255,0.26)_45%,rgba(219,233,255,0.32)_100%)]" />
            <div className="absolute inset-x-8 top-0 h-px bg-white/80" />
            <div className="absolute -left-10 top-0 h-20 w-40 rounded-full bg-white/35 blur-2xl" />
            <div className="absolute -right-8 bottom-0 h-16 w-32 rounded-full bg-[#dbe6ff]/45 blur-2xl" />
            <div className="relative">
              <HeaderBar />
            </div>
          </header>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[2.25rem] border border-white/80 bg-white/90 shadow-[0_28px_100px_rgba(44,87,181,0.12)] backdrop-blur">
        <header className="border-b border-[#edf1fb] px-5 py-4 sm:px-8">
          <HeaderBar />
        </header>

        <section className="px-5 pb-8 pt-5 sm:px-8 sm:pt-7">
          <HeroArt
            activeIndex={currentHeroIndex}
            onSelect={setCurrentHeroIndex}
          />
        </section>

        <section className="px-5 pb-6 sm:px-8">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-[#16203b]">
                Ангилал
              </h2>
            </div>
            <div className="hidden gap-2 sm:flex">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#edf1fb] text-[#8d9ab6]">
                <span aria-hidden="true">{"<"}</span>
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#edf1fb] text-[#8d9ab6]">
                <span aria-hidden="true">{">"}</span>
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {categories.map((category) => (
              <article
                key={category.name}
                className="rounded-[1.6rem] border border-[#edf1fb] bg-white p-5 text-center shadow-[0_14px_30px_rgba(30,58,138,0.05)] transition hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(30,58,138,0.10)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3f7ff]">
                  <DeviceIcon kind={category.kind} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#16203b]">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-[#91a0bd]">
                  {category.itemCount}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 pb-10 sm:px-8">
          <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-[#16203b]">
                Онцлох бараа
              </h2>
            </div>

            <div className="flex w-fit flex-wrap gap-2 rounded-full bg-[#f4f7ff] p-1.5">
              {productTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveProductTab(tab.id)}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    activeProductTab === tab.id
                      ? "bg-white text-[#16203b] shadow-[0_10px_22px_rgba(55,114,255,0.14)]"
                      : "text-[#6f7f9d] hover:text-[#16203b]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
