"use client";

import { useMemo, useState } from "react";
import type { AdminOrder, AdminOrderStatus } from "../mock-data";

type OrderPanelProps = {
  orders: AdminOrder[];
  onUpdateStatuses: (orderIds: string[], status: AdminOrderStatus) => void;
};

const deliveryStates: AdminOrderStatus[] = [
  "Delivered",
  "Pending",
  "Cancelled",
];

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <rect
        x="4"
        y="6"
        width="16"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 4v4M16 4v4M4 10h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M8 10l4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SortIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M8 7l4-4 4 4M16 17l-4 4-4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function rowStatusClasses(status: AdminOrderStatus) {
  if (status === "Delivered") {
    return "border-[#8dd2a0] text-[#1f2937]";
  }

  if (status === "Cancelled") {
    return "border-[#d7dbe4] text-[#1f2937]";
  }

  return "border-[#ff4b4b] text-[#1f2937]";
}

export function OrderPanel({ orders, onUpdateStatuses }: OrderPanelProps) {
  const [selectedOrderIds, setSelectedOrderIds] = useState<string[]>([]);
  const [isStateModalOpen, setIsStateModalOpen] = useState(false);
  const [draftState, setDraftState] = useState<AdminOrderStatus>("Pending");

  const allSelected =
    orders.length > 0 && selectedOrderIds.length === orders.length;

  const selectedOrders = useMemo(
    () => orders.filter((order) => selectedOrderIds.includes(order.id)),
    [orders, selectedOrderIds],
  );

  const openStateModal = (orderIds: string[], initialState?: AdminOrderStatus) => {
    if (orderIds.length === 0) {
      return;
    }

    setSelectedOrderIds(orderIds);
    setDraftState(initialState ?? "Pending");
    setIsStateModalOpen(true);
  };

  const closeStateModal = () => {
    setIsStateModalOpen(false);
  };

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedOrderIds([]);
      return;
    }

    setSelectedOrderIds(orders.map((order) => order.id));
  };

  const toggleSelectRow = (orderId: string) => {
    setSelectedOrderIds((current) =>
      current.includes(orderId)
        ? current.filter((id) => id !== orderId)
        : [...current, orderId],
    );
  };

  const handleSaveState = () => {
    onUpdateStatuses(selectedOrderIds, draftState);
    setIsStateModalOpen(false);
  };

  return (
    <>
      <section className="rounded-[28px] bg-white">
        <div className="flex flex-col gap-4 border-b border-[#e5e7eb] px-5 py-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-[20px] font-semibold text-[#121212]">Orders</h1>
            <p className="mt-1 text-sm text-[#6b7280]">{orders.length} items</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#d9dde6] px-5 text-sm text-[#1f2937]"
            >
              <CalendarIcon />
              13 June 2023 - 14 July 2023
            </button>

            <button
              type="button"
              onClick={() => openStateModal(selectedOrderIds, draftState)}
              disabled={selectedOrderIds.length === 0}
              className="inline-flex h-11 items-center justify-center gap-3 rounded-full bg-[#111217] px-5 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              Change delivery state
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-white/12 px-1 text-xs font-semibold">
                {selectedOrderIds.length}
              </span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr className="text-left text-sm text-[#6b7280]">
                <th className="w-12 px-4 py-4">
                  <button
                    type="button"
                    onClick={toggleSelectAll}
                    className={`flex h-4 w-4 items-center justify-center rounded border ${
                      allSelected
                        ? "border-[#111217] bg-[#111217] text-white"
                        : "border-[#9ca3af] bg-white text-transparent"
                    }`}
                    aria-label="Select all orders"
                  >
                    ✓
                  </button>
                </th>
                <th className="min-w-12 px-4 py-4">№</th>
                <th className="min-w-[180px] px-4 py-4">Customer</th>
                <th className="min-w-[150px] px-4 py-4">Food</th>
                <th className="min-w-[140px] px-4 py-4">
                  <span className="inline-flex items-center gap-2">
                    Date
                    <SortIcon />
                  </span>
                </th>
                <th className="min-w-[110px] px-4 py-4">Total</th>
                <th className="min-w-[220px] px-4 py-4">Delivery Address</th>
                <th className="min-w-[160px] px-4 py-4">
                  <span className="inline-flex items-center gap-2">
                    Delivery state
                    <SortIcon />
                  </span>
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => {
                const isSelected = selectedOrderIds.includes(order.id);

                return (
                  <tr
                    key={order.id}
                    className={`border-t border-[#edf0f4] text-sm text-[#374151] ${
                      isSelected ? "bg-[#f4f4f5]" : "bg-white"
                    }`}
                  >
                    <td className="border-t border-[#edf0f4] px-4 py-3 align-top">
                      <button
                        type="button"
                        onClick={() => toggleSelectRow(order.id)}
                        className={`flex h-4 w-4 items-center justify-center rounded border ${
                          isSelected
                            ? "border-[#111217] bg-[#111217] text-white"
                            : "border-[#9ca3af] bg-white text-transparent"
                        }`}
                        aria-label={`Select ${order.id}`}
                      >
                        ✓
                      </button>
                    </td>
                    <td className="border-t border-[#edf0f4] px-4 py-3 align-top text-[#1f2937]">
                      {index + 1}
                    </td>
                    <td className="border-t border-[#edf0f4] px-4 py-3 align-top">
                      {order.customerName}
                    </td>
                    <td className="border-t border-[#edf0f4] px-4 py-3 align-top">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 text-left"
                      >
                        {order.items.length} foods
                        <ChevronIcon />
                      </button>
                    </td>
                    <td className="border-t border-[#edf0f4] px-4 py-3 align-top">
                      {order.date}
                    </td>
                    <td className="border-t border-[#edf0f4] px-4 py-3 align-top">
                      ${order.total.toFixed(2)}
                    </td>
                    <td className="border-t border-[#edf0f4] px-4 py-3 align-top text-[#6b7280]">
                      <p className="max-w-[220px] leading-5">{order.address}</p>
                    </td>
                    <td className="border-t border-[#edf0f4] px-4 py-3 align-top">
                      <button
                        type="button"
                        onClick={() => openStateModal([order.id], order.status)}
                        className={`inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm ${rowStatusClasses(order.status)}`}
                      >
                        {order.status}
                        <ChevronIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-end gap-2 px-5 py-5">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f4f6] text-[#9ca3af]"
          >
            {"<"}
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111217] text-sm text-white"
          >
            1
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f4f6] text-sm text-[#4b5563]"
          >
            2
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f4f6] text-sm text-[#4b5563]"
          >
            3
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f4f6] text-[#9ca3af]"
          >
            {">"}
          </button>
        </div>
      </section>

      {isStateModalOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/30 px-4">
          <div className="w-full max-w-[340px] rounded-[24px] bg-white p-6 shadow-[0_30px_60px_rgba(15,23,42,0.18)]">
            <div className="flex items-center justify-between">
              <p className="text-[22px] font-semibold text-[#121212]">
                Change delivery state
              </p>
              <button
                type="button"
                onClick={closeStateModal}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4f4f5] text-[#4b5563]"
                aria-label="Close state modal"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {deliveryStates.map((state) => (
                <button
                  key={state}
                  type="button"
                  onClick={() => setDraftState(state)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    draftState === state
                      ? "border border-[#ff4b4b] bg-white text-[#ff4b4b]"
                      : "bg-[#f4f4f5] text-[#1f2937]"
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-[18px] bg-[#fafafa] px-4 py-3 text-sm text-[#6b7280]">
              {selectedOrders.length} order selected
            </div>

            <button
              type="button"
              onClick={handleSaveState}
              className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-[#111217] text-sm font-semibold text-white"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
}
