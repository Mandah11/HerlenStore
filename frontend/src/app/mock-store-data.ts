export type NavLink = {
  label: string;
};

export type Category = {
  name: string;
  itemCount: string;
  kind:
    | "phone"
    | "computer"
    | "accessory"
    | "laptop"
    | "audio"
    | "network"
    | "gaming";
};

export type Stat = {
  value: string;
  label: string;
};

export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  details: string[];
  price: number;
  oldPrice?: number;
  isSale: boolean;
  isNew: boolean;
  rating: number;
  reviews: number;
  badge?: string;
  kind:
    | "controller"
    | "keyboard"
    | "camera"
    | "speaker"
    | "smart-speaker"
    | "mouse"
    | "headset"
    | "gamepad";
  palette: {
    card: string;
    accent: string;
    glow: string;
  };
};

export type HeroSlide = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryLabel: string;
  secondaryValue: string;
  visual: "store" | "headset" | "keyboard";
};

export const categories: Category[] = [
  { name: "Утас", itemCount: "24 бараа", kind: "phone" },
  { name: "Компьютер", itemCount: "18 бараа", kind: "computer" },
  { name: "Дагалдах", itemCount: "42 бараа", kind: "accessory" },
  { name: "Ноутбук", itemCount: "16 бараа", kind: "laptop" },
  { name: "Аудио", itemCount: "30 бараа", kind: "audio" },
  { name: "Сүлжээ", itemCount: "11 бараа", kind: "network" },
  { name: "PC Gaming", itemCount: "19 бараа", kind: "gaming" },
];

export const promoStats: Stat[] = [
  { value: "15", label: "цагийн battery" },
  { value: "10", label: "минутын хурдан цэнэг" },
  { value: "36", label: "мм драйвер" },
  { value: "54", label: "db дуу тусгаарлалт" },
];

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: "Онцлох дэлгүүр",
    title: "Хэрлэнгийн дэлгүүр өдөр бүр таныг угтана.",
    description:
      "Таны оруулсан баннер одоо hero хэсгийн эргэлддэг слайд болсон тул нүүр хуудас илүү амьд, байнга шинэ мэт харагдана.",
    primaryCta: "Дэлгүүр үзэх",
    secondaryLabel: "Өдөр бүр ажиллана",
    secondaryValue: "10:00 - 20:00",
    visual: "store",
  },
  {
    id: 2,
    eyebrow: "Аудио долоо хоног",
    title: "Roco утасгүй дуугаралт, илүү цэвэр premium танилцуулгатай.",
    description:
      "Чихэвч, хурдан хүргэлт, онцлох саналуудаа автоматаар солигдох electronics hero дотор тод харагдуулна.",
    primaryCta: "Аудио үзэх",
    secondaryLabel: "Эхлэх үнэ",
    secondaryValue: "$49.00",
    visual: "headset",
  },
  {
    id: 3,
    eyebrow: "Ажлын булан",
    title: "Ухаалаг дагалдах хэрэгслээр цэвэрхэн setup бүрдүүл.",
    description:
      "Keyboard, оффис хэрэгсэл, онцлох бараанууд автоматаар солигдож харагдах тул нүүр хуудас илүү амьд байна.",
    primaryCta: "Хэрэгсэл үзэх",
    secondaryLabel: "Онцлох сонголт",
    secondaryValue: "42 бараа",
    visual: "keyboard",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Nova Pro Контроллер",
    category: "Тоглоомын хэрэгсэл",
    description: "Гарт эвтэйхэн, хурдан хариу үйлдэлтэй wireless контроллер.",
    details: [
      "Bluetooth болон USB холболт дэмжинэ.",
      "Урт хугацааны тоглолтод эвтэйхэн баригддаг хэлбэртэй.",
      "Компьютер болон console орчинд ашиглахад тохиромжтой.",
    ],
    price: 39.9,
    oldPrice: 49.9,
    isSale: true,
    isNew: true,
    rating: 4.8,
    reviews: 245,
    badge: "Шинэ",
    kind: "controller",
    palette: {
      card: "from-[#f8fbff] to-[#eef4ff]",
      accent: "#5d8df6",
      glow: "#bed4ff",
    },
  },
  {
    id: 2,
    name: "Pulse RGB Keyboard",
    category: "Дагалдах хэрэгсэл",
    description: "Өнгөлөг гэрэлтүүлэгтэй, өдөр тутам болон gaming-д тохирсон keyboard.",
    details: [
      "RGB гэрэлтүүлгийн олон горимтой.",
      "Зөөлөн товшилттой тул оффис болон gaming-д хоёуланд нь зохино.",
      "Компакт хэмжээтэй ч хэрэгтэй бүх товчлууруудтай.",
    ],
    price: 29.9,
    oldPrice: 34.9,
    isSale: true,
    isNew: true,
    rating: 4.7,
    reviews: 196,
    badge: "Хит",
    kind: "keyboard",
    palette: {
      card: "from-[#fff7fb] to-[#f4f7ff]",
      accent: "#8f6cf8",
      glow: "#f6b6dc",
    },
  },
  {
    id: 3,
    name: "Luma Ухаалаг Камер",
    category: "Аюулгүй байдал",
    description: "Гэр болон оффист зориулсан цэвэр дүрстэй ухаалаг камер.",
    details: [
      "Цэвэр, тод дүрстэй real-time хяналт өгнө.",
      "Гэр, оффис, жижиг тасалгаанд байрлуулахад авсаархан.",
      "Хөдөлгөөн илрүүлэх суурь боломжтой.",
    ],
    price: 29.9,
    isSale: false,
    isNew: true,
    rating: 4.6,
    reviews: 88,
    kind: "camera",
    palette: {
      card: "from-[#f9fbff] to-[#eef7ff]",
      accent: "#68a4f8",
      glow: "#d5e7ff",
    },
  },
  {
    id: 4,
    name: "RoomBeat Спикер Хос",
    category: "Аудио",
    description: "Өрөө дүүрэн дуугаралттай, minimal загварын спикер хос.",
    details: [
      "Өдөр тутмын хөгжим, кино, gaming-д хангалттай хүчтэй дуугаралттай.",
      "Minimal загвар нь өрөөний интерьерт амархан зохицно.",
      "Ширээ болон тавиур дээр байрлуулахад тохиромжтой хос спикер.",
    ],
    price: 39.9,
    oldPrice: 44.9,
    isSale: true,
    isNew: false,
    rating: 4.9,
    reviews: 164,
    kind: "speaker",
    palette: {
      card: "from-[#f8faff] to-[#edf2fb]",
      accent: "#7a8da8",
      glow: "#cad4e6",
    },
  },
  {
    id: 5,
    name: "Echo Mini Pod",
    category: "Ухаалаг гэр",
    description: "Дуу хоолойгоор удирдах боломжтой авсаархан smart speaker.",
    details: [
      "Дуу хоолойгоор удирдах daily assistant хэрэглээнд тохиромжтой.",
      "Авсаархан хэмжээтэй тул жижиг өрөө, ширээн дээр сайн сууна.",
      "Ухаалаг гэрийн энгийн автоматжуулалттай холбож ашиглаж болно.",
    ],
    price: 59.9,
    isSale: false,
    isNew: false,
    rating: 4.7,
    reviews: 132,
    badge: "Шилдэг",
    kind: "smart-speaker",
    palette: {
      card: "from-[#f6fbff] to-[#edf6ff]",
      accent: "#4f7df3",
      glow: "#b9d5ff",
    },
  },
  {
    id: 6,
    name: "Glide Босоо Хулгана",
    category: "Оффис",
    description: "Удаан ажиллахад гарын ачаалал багатай ergonomic mouse.",
    details: [
      "Гарын бугуйн ачааллыг багасгах ergonomic босоо хэлбэртэй.",
      "Оффис, дизайн, урт хугацааны компьютерийн ажилд зохицсон.",
      "Зөөлөн мэдрэмжтэй удирдлага нь өдөр тутмын хэрэглээнд тохиромжтой.",
    ],
    price: 49.9,
    oldPrice: 59.9,
    isSale: true,
    isNew: false,
    rating: 4.8,
    reviews: 211,
    kind: "mouse",
    palette: {
      card: "from-[#fafbff] to-[#eef2fb]",
      accent: "#6e7cff",
      glow: "#ced4ff",
    },
  },
  {
    id: 7,
    name: "Roco Air Чихэвч",
    category: "Аудио",
    description: "Тав тухтай зөөлөвчтэй, өдөр тутмын хэрэглээнд тохирсон чихэвч.",
    details: [
      "Зөөлөн чихэвчний cushion нь удаан зүүхэд эвтэйхэн.",
      "Хөгжим, ажил, онлайн уулзалт зэрэгт өдөр тутам ашиглахад тохиромжтой.",
      "Хөнгөн биетэй тул авч явахад амархан.",
    ],
    price: 89.9,
    oldPrice: 109.9,
    isSale: true,
    isNew: true,
    rating: 4.9,
    reviews: 328,
    badge: "Хямдрал",
    kind: "headset",
    palette: {
      card: "from-[#fff8f5] to-[#f7f7ff]",
      accent: "#ff8a7a",
      glow: "#ffd4cc",
    },
  },
  {
    id: 8,
    name: "Titan Dual Gamepad",
    category: "Тоглоомын хэрэгсэл",
    description: "Хос удирдлагатай, console мэдрэмжтэй gamepad сет.",
    details: [
      "Хос удирдлагатай тул хамт тоглох хэрэглээнд тохиромжтой.",
      "Console төрлийн товчлуурын байрлалтай учир барихад эвтэйхэн.",
      "Gaming setup-д шууд нэмэхэд бэлэн starter set.",
    ],
    price: 69.9,
    isSale: false,
    isNew: true,
    rating: 4.6,
    reviews: 140,
    kind: "gamepad",
    palette: {
      card: "from-[#f9fbff] to-[#eef4ff]",
      accent: "#6d96ff",
      glow: "#d7e3ff",
    },
  },
];

export function getProductById(id: number) {
  return products.find((product) => product.id === id);
}
