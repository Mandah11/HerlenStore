"use client";

import Image from "next/image";
import { useState, type ChangeEvent } from "react";
import type { AdminCategory, AdminDish } from "../mock-data";

type FoodCardProps = {
  dish: AdminDish;
  categories: AdminCategory[];
  categoryName: string;
  onSave: (dish: AdminDish) => void;
  onDelete: (dishId: string) => void;
};

type DishFormState = {
  foodName: string;
  price: string;
  ingredients: string;
  categoryId: string;
  image: string;
};

function EditIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M4 20h4l10-10-4-4L4 16v4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 7.5l4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M5 7h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 7V5.5h6V7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 7v11a1.5 1.5 0 001.5 1.5h5A1.5 1.5 0 0016 18V7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 10.5v5M13.5 10.5v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

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

function toFormState(dish: AdminDish): DishFormState {
  return {
    foodName: dish.foodName,
    price: String(dish.price),
    ingredients: dish.ingredients,
    categoryId: dish.categoryId,
    image: dish.image,
  };
}

export function FoodCard({
  dish,
  categories,
  categoryName,
  onSave,
  onDelete,
}: FoodCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState<DishFormState>(() => toFormState(dish));

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

  const handleSave = () => {
    const price = Number(form.price);

    if (!form.foodName.trim() || Number.isNaN(price) || price <= 0) {
      return;
    }

    onSave({
      ...dish,
      foodName: form.foodName.trim(),
      price,
      ingredients: form.ingredients.trim(),
      categoryId: form.categoryId,
      image: form.image,
    });
    setIsEditing(false);
  };

  return (
    <article className="rounded-[24px] border border-[#dedfe3] bg-white p-4 shadow-[0_1px_0_rgba(17,24,39,0.02)]">
      <div className="relative h-[150px] overflow-hidden rounded-[18px]">
        <Image
          src={dish.image}
          alt={dish.foodName}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-cover"
        />
        <button
          type="button"
          className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff4b4b] shadow-[0_10px_24px_rgba(17,24,39,0.16)]"
          onClick={() => {
            setForm(toFormState(dish));
            setIsEditing(true);
          }}
          aria-label={`Edit ${dish.foodName}`}
        >
          <EditIcon />
        </button>
      </div>

      <div className="mt-4">
        <div className="flex items-start justify-between gap-3">
          <p className="line-clamp-1 text-[14px] font-medium text-[#ff4b4b]">
            {dish.foodName}
          </p>
          <p className="text-[14px] text-[#1f2937]">${dish.price.toFixed(2)}</p>
        </div>
        <p className="mt-3 line-clamp-3 text-[14px] leading-6 text-[#4b5563]">
          {dish.ingredients}
        </p>
      </div>

      {isEditing && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/30 px-4">
          <div className="w-full max-w-[520px] rounded-[28px] bg-white p-6 shadow-[0_30px_60px_rgba(15,23,42,0.18)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[22px] font-semibold text-[#121212]">
                  Edit dish
                </p>
                <p className="mt-1 text-sm text-[#6b7280]">
                  Update {categoryName.toLowerCase()} menu item details.
                </p>
              </div>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f4f5] text-lg text-[#4b5563]"
                onClick={() => {
                  setForm(toFormState(dish));
                  setIsEditing(false);
                }}
                aria-label="Close editor"
              >
                x
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-medium text-[#374151]">
                  Dishes name
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
                <p className="mb-2 text-sm font-medium text-[#374151]">Price</p>
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
                className="h-28 w-full rounded-[22px] border border-[#d9dde6] px-4 py-3 outline-none focus:border-[#ff4b4b]"
                placeholder="Type ingredients"
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
              <p className="mb-2 text-sm font-medium text-[#374151]">Image</p>
              <div className="rounded-[22px] bg-[#f8fafc] p-3">
                <label
                  htmlFor={`edit-file-input-${dish.id}`}
                  className="block cursor-pointer"
                >
                  <div className="relative h-[180px] overflow-hidden rounded-[18px] border border-dashed border-[#d9dde6] bg-white">
                    <Image
                      src={form.image}
                      alt={`${dish.foodName} preview`}
                      fill
                      unoptimized
                      sizes="384px"
                      className="object-cover"
                    />
                  </div>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id={`edit-file-input-${dish.id}`}
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ffd4d4] text-[#ff4b4b]"
                onClick={() => {
                  onDelete(dish.id);
                  setIsEditing(false);
                }}
                aria-label={`Delete ${dish.foodName}`}
              >
                <DeleteIcon />
              </button>

              <label
                htmlFor={`edit-file-input-${dish.id}`}
                className="flex h-11 items-center gap-2 rounded-full border border-[#d9dde6] px-4 text-sm font-medium text-[#4b5563]"
              >
                <PhotoIcon />
                Change image
              </label>

              <button
                type="button"
                className="rounded-full bg-[#111217] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2b2d33]"
                onClick={handleSave}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
