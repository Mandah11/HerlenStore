import { Request, Response } from "express";
import { CategoryModel } from "../models/category.model";

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "Categories fetched successfully.",
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch categories.",
      error,
    });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const createdCategory = await CategoryModel.create(req.body);

    res.status(201).json({
      message: "Category created successfully.",
      data: createdCategory,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create category.",
      error,
    });
  }
};
