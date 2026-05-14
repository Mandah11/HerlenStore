import { Request, Response } from "express";
import { DishModel } from "../models/dish.model";

export const getDishes = async (_req: Request, res: Response) => {
  try {
    const dishes = await DishModel.find()
      .populate("categoryId")
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: "Dishes fetched successfully.",
      data: dishes,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch dishes.",
      error,
    });
  }
};

export const createDish = async (req: Request, res: Response) => {
  try {
    const createdDish = await DishModel.create(req.body);

    res.status(201).json({
      message: "Dish created successfully.",
      data: createdDish,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create dish.",
      error,
    });
  }
};

export const updateDish = async (req: Request, res: Response) => {
  try {
    const updatedDish = await DishModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedDish) {
      res.status(404).json({
        message: "Dish not found.",
      });
      return;
    }

    res.status(200).json({
      message: "Dish updated successfully.",
      data: updatedDish,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update dish.",
      error,
    });
  }
};

export const deleteDish = async (req: Request, res: Response) => {
  try {
    const deletedDish = await DishModel.findByIdAndDelete(req.params.id);

    if (!deletedDish) {
      res.status(404).json({
        message: "Dish not found.",
      });
      return;
    }

    res.status(200).json({
      message: "Dish deleted successfully.",
      data: deletedDish,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete dish.",
      error,
    });
  }
};
