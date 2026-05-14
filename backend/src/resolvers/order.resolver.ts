import { Request, Response } from "express";
import { OrderModel } from "../models/order.model";

export const getOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await OrderModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "Orders fetched successfully.",
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch orders.",
      error,
    });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const createdOrder = await OrderModel.create(req.body);

    res.status(201).json({
      message: "Order created successfully.",
      data: createdOrder,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create order.",
      error,
    });
  }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedOrder) {
      res.status(404).json({
        message: "Order not found.",
      });
      return;
    }

    res.status(200).json({
      message: "Order status updated successfully.",
      data: updatedOrder,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update order status.",
      error,
    });
  }
};
