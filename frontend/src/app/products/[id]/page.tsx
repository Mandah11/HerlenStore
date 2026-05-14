import { notFound } from "next/navigation";
import type { Product } from "../../mock-store-data";
import { getProductById, products } from "../../mock-store-data";
import { ProductGallery } from "./product-gallery";

type ProductDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type PurchasePanelProps = {
  product: Product;
};

type DetailSectionProps = {
  details: Product["details"];
};

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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M5 12.5l4.2 4.2L19 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PurchasePanel({ product }: PurchasePanelProps) {
  const isSale = Boolean(product.isSale && product.oldPrice);

  return (
    <section className="mt-7 rounded-[2rem] border border-[#e8eefb] bg-gradient-to-br from-white via-[#fcfdff] to-[#f5f8ff] p-5 shadow-[0_22px_50px_rgba(85,108,164,0.08)]">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-[#eef4ff] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5f7cf0]">
          {product.category}
        </span>
        {product.badge ? (
          <span className="rounded-full border border-[#e3eaf9] bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8ca0c5]">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
          <p className="text-[3rem] font-bold tracking-[-0.06em] text-[#16203b]">
            ${product.price.toFixed(2)}
          </p>
          {isSale ? (
            <span className="text-[17px] text-[#91a2c4] line-through">
              ${product.oldPrice!.toFixed(2)}
            </span>
          ) : null}
        </div>

        <div className="inline-flex w-full items-center justify-between gap-3 rounded-[1.2rem] border border-[#e7eefc] bg-white px-2.5 py-2 shadow-[0_12px_24px_rgba(88,111,169,0.08)] md:w-auto">
          <button className="flex h-10 w-10 items-center justify-center rounded-[0.9rem] bg-[#f7faff] text-lg font-semibold text-[#5f7298] transition hover:-translate-y-0.5">
            -
          </button>
          <div className="min-w-[2.75rem] text-center text-lg font-semibold text-[#16203b]">
            1
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-[0.9rem] bg-[#f7faff] text-lg font-semibold text-[#5f7298] transition hover:-translate-y-0.5">
            +
          </button>
        </div>
      </div>

      {!isSale ? (
        <p className="mt-3 text-sm text-[#8ea0c4]">Одоо захиалах боломжтой</p>
      ) : null}

      <div className="mt-4 grid gap-3 sm:grid-cols-[84px_1fr_1fr]">
        <button className="flex min-h-[64px] items-center justify-center rounded-[1.55rem] border border-[#dfe7f7] bg-white text-[#6078b0] shadow-[0_12px_24px_rgba(92,116,171,0.06)] transition hover:-translate-y-0.5 hover:bg-[#f8fbff]">
          <HeartIcon />
        </button>
        <button className="rounded-[1.55rem] bg-gradient-to-r from-[#141b28] to-[#24314c] px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_36px_rgba(20,27,40,0.22)] transition hover:-translate-y-0.5">
          Сагсанд нэмэх
        </button>
        <button className="rounded-[1.55rem] border border-[#dfe7f7] bg-white px-6 py-4 text-sm font-semibold text-[#22314f] shadow-[0_12px_24px_rgba(92,116,171,0.06)] transition hover:-translate-y-0.5 hover:bg-[#f8fbff]">
          Шууд захиалах
        </button>
      </div>

      <div className="mt-5 grid gap-3 border-t border-[#edf2fb] pt-5 text-sm text-[#647593] sm:grid-cols-2">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef4ff] text-[#5f7cf0]">
            <CheckIcon />
          </span>
          <span>Хүргэлт хийх боломжтой</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef4ff] text-[#5f7cf0]">
            <CheckIcon />
          </span>
          <span>Чанарын баталгаатай</span>
        </div>
      </div>
    </section>
  );
}

function DetailSection({ details }: DetailSectionProps) {
  return (
    <section className="mt-7 rounded-[2rem] border border-[#edf1fb] bg-[#fbfcff] p-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#98a8c5]">
            Дэлгэрэнгүй
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-[#1b2745]">
            Бүтээгдэхүүний онцлог
          </h2>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {details.map((detail) => (
          <div
            key={detail}
            className="flex items-start gap-3 rounded-[1.3rem] border border-[#e7edf8] bg-white px-4 py-4"
          >
            <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef4ff] text-[#5c7cf1]">
              <CheckIcon />
            </span>
            <p className="text-sm leading-7 text-[#5f7192]">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) {
    notFound();
  }

  const productCode = `ET-${String(product.id).padStart(3, "0")}`;

  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <section className="overflow-hidden rounded-[2.6rem] border border-white/80 bg-white/90 p-5 shadow-[0_30px_90px_rgba(44,87,181,0.12)] xl:p-8">
          <div className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr]">
            <ProductGallery product={product} />

            <div className="flex flex-col xl:sticky xl:top-8 xl:self-start">
              <div className="rounded-[2.2rem] border border-[#edf1fb] bg-white p-6 shadow-[0_20px_50px_rgba(25,50,120,0.06)]">
                <h1 className="text-4xl font-bold tracking-[-0.05em] text-[#16203b] sm:text-5xl">
                  {product.name}
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#70809e]">
                  <p>
                    Барааны код:{" "}
                    <span className="font-semibold text-[#22314f]">
                      {productCode}
                    </span>
                  </p>
                  <p>
                    Төрөл:{" "}
                    <span className="font-semibold text-[#22314f]">
                      {product.category}
                    </span>
                  </p>
                </div>

                <p className="mt-5 text-base leading-8 text-[#687898]">
                  {product.description}
                </p>

                <PurchasePanel product={product} />
                <DetailSection details={product.details} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
