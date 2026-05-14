"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuItem } from "./components/menuItem";
import { OrderPanel } from "./components/order-panel";
import { Product } from "./components/product";
import {
  adminMockCategories,
  adminMockDishes,
  adminMockOrders,
  type AdminCategory,
  type AdminDish,
  type AdminOrder,
} from "./mock-data";

type AdminSection = "food" | "orders";

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <rect
        x="4"
        y="4"
        width="6"
        height="6"
        rx="1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <rect
        x="14"
        y="4"
        width="6"
        height="6"
        rx="1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <rect
        x="4"
        y="14"
        width="6"
        height="6"
        rx="1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <rect
        x="14"
        y="14"
        width="6"
        height="6"
        rx="1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M3.5 6.5h10v8h-10z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M13.5 9h3.7l2.3 2.4v3.1h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="17.5" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="17.5" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M12 5v14M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function countByStatus(orders: AdminOrder[], status: AdminOrder["status"]) {
  return orders.filter((order) => order.status === status).length;
}

export default function FoodMenus() {
  const [activeSection, setActiveSection] = useState<AdminSection>("food");
  const [categories, setCategories] =
    useState<AdminCategory[]>(adminMockCategories);
  const [dishes, setDishes] = useState<AdminDish[]>(adminMockDishes);
  const [orders, setOrders] = useState<AdminOrder[]>(adminMockOrders);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!toastMessage) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setToastMessage("");
    }, 2200);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [toastMessage]);

  const categoryCounts: Record<string, number> = {};
  for (const category of categories) {
    categoryCounts[category.id] = dishes.filter(
      (dish) => dish.categoryId === category.id,
    ).length;
  }

  const totalDishCount = dishes.length;
  const pendingOrders = countByStatus(orders, "Pending");
  const preparingOrders = countByStatus(orders, "Preparing");

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const handleAddCategory = () => {
    const trimmedName = categoryName.trim();

    if (!trimmedName) {
      setCategoryError("Category name required.");
      return;
    }

    const exists = categories.some(
      (category) => category.name.toLowerCase() === trimmedName.toLowerCase(),
    );

    if (exists) {
      setCategoryError("This category already exists.");
      return;
    }

    const newCategory = {
      id: `cat-${trimmedName.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
      name: trimmedName,
    };

    setCategories((current) => [...current, newCategory]);
    setSelectedCategoryId(newCategory.id);
    setCategoryName("");
    setCategoryError("");
    setIsAddCategoryOpen(false);
    showToast(`${trimmedName} category added.`);
  };

  const handleAddDish = (dish: Omit<AdminDish, "id">) => {
    setDishes((current) => [
      ...current,
      {
        ...dish,
        id: `dish-${Date.now()}`,
      },
    ]);
    showToast(`${dish.foodName} dish added.`);
  };

  const handleUpdateDish = (updatedDish: AdminDish) => {
    setDishes((current) =>
      current.map((dish) => (dish.id === updatedDish.id ? updatedDish : dish)),
    );
    showToast(`${updatedDish.foodName} updated.`);
  };

  const handleDeleteDish = (dishId: string) => {
    const deletedDish = dishes.find((dish) => dish.id === dishId);

    setDishes((current) => current.filter((dish) => dish.id !== dishId));

    if (deletedDish) {
      showToast(`${deletedDish.foodName} deleted.`);
    }
  };

  const handleUpdateOrderStatuses = (
    orderIds: string[],
    status: AdminOrder["status"],
  ) => {
    setOrders((current) =>
      current.map((order) =>
        orderIds.includes(order.id) ? { ...order, status } : order,
      ),
    );
    showToast(`Updated ${orderIds.length} order state.`);
  };

  return (
    <main className="min-h-screen bg-[#f3f4f6] p-5">
      <div className="grid w-full gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="min-h-[780px] rounded-[34px] bg-white px-5 py-6">
          <Link
            href="/"
            className="mb-12 flex items-center gap-3 px-2 text-[#111217]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111217] text-white">
              <GridIcon />
            </span>
            <span className="text-[18px] font-medium leading-6">
              Admin panel
            </span>
          </Link>

          <div className="space-y-5">
            <button
              type="button"
              onClick={() => setActiveSection("food")}
              className={`flex w-full items-center gap-3 rounded-[999px] px-6 py-4 text-left text-[18px] transition ${
                activeSection === "food"
                  ? "bg-[#111217] text-white"
                  : "text-[#111217] hover:bg-[#f3f4f6]"
              }`}
            >
              <GridIcon />
              <span>Food menu</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSection("orders")}
              className={`flex w-full items-center gap-3 rounded-[999px] px-6 py-4 text-left text-[18px] transition ${
                activeSection === "orders"
                  ? "bg-[#111217] text-white"
                  : "text-[#111217] hover:bg-[#f3f4f6]"
              }`}
            >
              <TruckIcon />
              Orders
            </button>
          </div>

          <div className="mt-14 rounded-[28px] bg-[#f9fafb] px-5 py-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#b4bfd3]">
              Quick Stats
            </p>
            <div className="mt-5 space-y-4 text-[15px] text-[#374151]">
              <div className="flex items-center justify-between">
                <span>Dishes</span>
                <span className="font-semibold text-[#111217]">
                  {totalDishCount}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Pending</span>
                <span className="font-semibold text-[#111217]">
                  {pendingOrders}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Preparing</span>
                <span className="font-semibold text-[#111217]">
                  {preparingOrders}
                </span>
              </div>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          {activeSection === "food" ? (
            <>
              <section className="rounded-[28px] bg-white p-6">
                <div className="flex flex-col gap-5">
                  <h1 className="text-[20px] font-semibold text-[#121212]">
                    Dishes category
                  </h1>

                  <div className="flex flex-wrap gap-3">
                    <MenuItem
                      label="All Dishes"
                      count={totalDishCount}
                      active={!selectedCategoryId}
                      onClick={() => setSelectedCategoryId("")}
                    />

                    {categories.map((category) => (
                      <MenuItem
                        key={category.id}
                        label={category.name}
                        count={categoryCounts[category.id] ?? 0}
                        active={selectedCategoryId === category.id}
                        onClick={() => setSelectedCategoryId(category.id)}
                      />
                    ))}

                    <button
                      type="button"
                      onClick={() => {
                        setCategoryError("");
                        setCategoryName("");
                        setIsAddCategoryOpen(true);
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff4b4b] text-white"
                      aria-label="Add category"
                    >
                      <PlusIcon />
                    </button>
                  </div>
                </div>
              </section>

              <div className="mt-5">
                <Product
                  selectedCategoryId={selectedCategoryId}
                  categories={categories}
                  dishes={dishes}
                  onAddDish={handleAddDish}
                  onUpdateDish={handleUpdateDish}
                  onDeleteDish={handleDeleteDish}
                />
              </div>
            </>
          ) : (
            <OrderPanel
              orders={orders}
              onUpdateStatuses={handleUpdateOrderStatuses}
            />
          )}
        </div>
      </div>

      {isAddCategoryOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/30 px-4">
          <div className="w-full max-w-[520px] rounded-[28px] bg-white p-6 shadow-[0_30px_60px_rgba(15,23,42,0.18)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[22px] font-semibold text-[#121212]">
                  Add new category
                </p>
                <p className="mt-1 text-sm text-[#6b7280]">
                  Create a new dish group for the food menu.
                </p>
              </div>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f4f5] text-lg text-[#4b5563]"
                onClick={() => setIsAddCategoryOpen(false)}
                aria-label="Close add category modal"
              >
                x
              </button>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm font-medium text-[#374151]">
                Category name
              </p>
              <input
                className="h-11 w-full rounded-2xl border border-[#d9dde6] px-4 outline-none focus:border-[#ff4b4b]"
                placeholder="Type category name..."
                value={categoryName}
                onChange={(event) => {
                  setCategoryName(event.target.value);
                  if (categoryError) {
                    setCategoryError("");
                  }
                }}
              />
            </div>

            {categoryError ? (
              <div className="mt-3 text-sm text-[#ff4b4b]">{categoryError}</div>
            ) : null}

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                className="rounded-full bg-[#111217] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2b2d33]"
                onClick={handleAddCategory}
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}

      {toastMessage && (
        <div className="fixed inset-x-0 top-4 z-30 flex justify-center px-4">
          <div className="rounded-full bg-[#111217] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.2)]">
            {toastMessage}
          </div>
        </div>
      )}
    </main>
  );
}
