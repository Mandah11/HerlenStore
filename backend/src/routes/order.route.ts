import { Router } from "express";
import {
  createOrder,
  getOrders,
  updateOrderStatus,
} from "../resolvers/order.resolver";

export const orderRouter = Router();

orderRouter.get("/", getOrders);
orderRouter.post("/", createOrder);
orderRouter.patch("/:id/status", updateOrderStatus);
