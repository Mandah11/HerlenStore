"use client";

import Image from "next/image";
import { useState, type ChangeEvent } from "react";
import { FoodCard } from "./foodcard";
import type { AdminCategory, AdminDish } from "../mock-data";

type ProductProps = {
  selectedCategoryId: string;
  categories: AdminCategory[];
  dishes: AdminDish[];
  onAddDish: (dish: Omit<AdminDish, "id">) => void;
  onUpdateDish: (dish: AdminDish) => void;
  onDeleteDish: (dishId: string) => void;
};

type AddDishFormState = {
  categoryId: string;
  foodName: string;
  price: string;
  ingredients: string;
  image: string;
};

const emptyDishForm: AddDishFormState = {
  categoryId: "",
  foodName: "",
  price: "",
  ingredients: "",
  image: "",
};

function PhotoIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M5 7.5A2.5 2.5 0 017.5 5h9A2.5 2.5 0 0119 7.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 015 16.5v-9z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="9.5" cy="10" r="1.5" fill="currentColor" />
      <path
        d="M7.5 16l3.5-3.5 2.5 2.5 2.5-3 2.5 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function buildFallbackImage(foodName: string, categoryName: string) {
  return (
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
        <rect width="640" height="420" rx="34" fill="#fff5f5" />
        <circle cx="520" cy="84" r="64" fill="#ff4b4b" opacity="0.16" />
        <rect x="96" y="112" width="448" height="196" rx="32" fill="#ffffff" />
        <circle cx="214" cy="210" r="66" fill="#ff4b4b" opacity="0.18" />
        <text x="96" y="362" fill="#161616" font-family="Arial, sans-serif" font-size="34" font-weight="700">${foodName}</text>
        <text x="96" y="392" fill="#6b7280" font-family="Arial, sans-serif" font-size="20">${categoryName}</text>
      </svg>
    `)
  );
}

export function Product({
  selectedCategoryId,
  categories,
  dishes,
  onAddDish,
  onUpdateDish,
  onDeleteDish,
}: ProductProps) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form, setForm] = useState<AddDishFormState>(emptyDishForm);

  const visibleCategories = selectedCategoryId
    ? categories.filter((category) => category.id === selectedCategoryId)
    : categories;

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        const imageResult = reader.result;
        setForm((current) => ({ ...current, image: imageResult }));
      }
    };
    reader.readAsDataURL(file);
  };

  const openAddModal = (categoryId: string) => {
    setForm({
      ...emptyDishForm,
      categoryId,
    });
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setForm(emptyDishForm);
    setIsAddModalOpen(false);
  };

  const handleAddDish = () => {
    const price = Number(form.price);
    const activeCategoryName =
      categories.find((category) => category.id === form.categoryId)?.name ??
      "Category";

    if (
      !form.categoryId ||
      !form.foodName.trim() ||
      Number.isNaN(price) ||
      price <= 0
    ) {
      return;
    }

    onAddDish({
      categoryId: form.categoryId,
      foodName: form.foodName.trim(),
      price,
      ingredients: form.ingredients.trim(),
      image:
        form.image ||
        buildFallbackImage(form.foodName.trim(), activeCategoryName),
    });

    closeAddModal();
  };

  return (
    <>
      <div className="space-y-5">
        {visibleCategories.map((category) => {
          const categoryDishes = dishes.filter(
            (dish) => dish.categoryId === category.id,
          );

          return (
            <section
              key={category.id}
              className="rounded-[26px] bg-white p-5 shadow-[0_1px_0_rgba(17,24,39,0.02)]"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-[19px] font-semibold text-[#121212]">
                  {category.name} ({categoryDishes.length})
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <button
                  type="button"
                  onClick={() => openAddModal(category.id)}
                  className="flex min-h-[250px] flex-col items-center justify-center rounded-[24px] border border-dashed border-[#ff8a8a] bg-white px-6 text-center transition hover:border-[#ff4b4b]"
                >
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff4b4b] text-3xl leading-none text-white">
                    +
                  </span>
                  <p className="text-[14px] font-medium text-[#1f1f1f]">
                    Add new Dish to
                  </p>
                  <p className="text-[14px] font-medium text-[#1f1f1f]">
                    {category.name}
                  </p>
                </button>

                {categoryDishes.map((dish) => (
                  <FoodCard
                    key={dish.id}
                    dish={dish}
                    categories={categories}
                    categoryName={category.name}
                    onSave={onUpdateDish}
                    onDelete={onDeleteDish}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {isAddModalOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/30 px-4">
          <div className="w-full max-w-[520px] rounded-[28px] bg-white p-6 shadow-[0_30px_60px_rgba(15,23,42,0.18)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[22px] font-semibold text-[#121212]">
                  Add new dish
                </p>
                <p className="mt-1 text-sm text-[#6b7280]">
                  Create a menu item and assign it to a category.
                </p>
              </div>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f4f5] text-lg text-[#4b5563]"
                onClick={closeAddModal}
                aria-label="Close add dish modal"
              >
                x
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-medium text-[#374151]">
                  Food name
                </p>
                <input
                  className="h-11 w-full rounded-2xl border border-[#d9dde6] px-4 outline-none focus:border-[#ff4b4b]"
                  placeholder="Type food name"
                  value={form.foodName}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      foodName: event.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-[#374151]">
                  Price
                </p>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="h-11 w-full rounded-2xl border border-[#d9dde6] px-4 outline-none focus:border-[#ff4b4b]"
                  placeholder="Enter price"
                  value={form.price}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      price: event.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="mb-2 text-sm font-medium text-[#374151]">
                Dish category
              </p>
              <select
                className="h-11 w-full rounded-2xl border border-[#d9dde6] bg-white px-4 outline-none focus:border-[#ff4b4b]"
                value={form.categoryId}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    categoryId: event.target.value,
                  }))
                }
              >
                <option value="" disabled>
                  Select category
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4">
              <p className="mb-2 text-sm font-medium text-[#374151]">
                Ingredients
              </p>
              <textarea
                className="h-[110px] w-full rounded-[22px] border border-[#d9dde6] px-4 py-3 outline-none focus:border-[#ff4b4b]"
                placeholder="List ingredients..."
                value={form.ingredients}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    ingredients: event.target.value,
                  }))
                }
              />
            </div>

            <div className="mt-4">
              <p className="mb-2 text-sm font-medium text-[#374151]">
                Food image
              </p>
              <div className="rounded-[22px] bg-[#f8fafc] p-3">
                <label
                  htmlFor="create-food-image"
                  className="block cursor-pointer"
                >
                  <div className="relative flex h-[170px] w-full items-center justify-center overflow-hidden rounded-[18px] border border-dashed border-[#d9dde6] bg-white">
                    {form.image ? (
                      <Image
                        src={form.image}
                        alt="New dish preview"
                        fill
                        unoptimized
                        sizes="384px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-3 text-[#6b7280]">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0f0] text-[#ff4b4b]">
                          <PhotoIcon />
                        </span>
                        <p className="text-center text-sm">
                          Choose a file or drag and drop it here
                        </p>
                      </div>
                    )}
                  </div>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="create-food-image"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                className="rounded-full bg-[#111217] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2b2d33]"
                onClick={handleAddDish}
              >
                Add Dish
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
