import mongoose from "mongoose";

export type OrderStatus =
  | "Pending"
  | "Confirmed"
  | "Preparing"
  | "Delivered"
  | "Cancelled";

export type OrderItem = {
  dishId?: mongoose.Types.ObjectId;
  name: string;
  quantity: number;
};

export type OrderDocument = {
  customerName: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  address: string;
  date: string;
};

const orderItemSchema = new mongoose.Schema<OrderItem>(
  {
    dishId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dish",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },
  },
  {
    _id: false,
  },
);

const orderSchema = new mongoose.Schema<OrderDocument>(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    items: {
      type: [orderItemSchema],
      required: true,
      validate: {
        validator: (value: OrderItem[]) => value.length > 0,
        message: "Order must contain at least one item.",
      },
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Preparing", "Delivered", "Cancelled"],
      default: "Pending",
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const OrderModel =
  mongoose.models.Order || mongoose.model<OrderDocument>("Order", orderSchema);
