import { Router } from "express";
import {
  createCategory,
  getCategories,
} from "../resolvers/category.resolver";

export const categoryRouter = Router();

categoryRouter.get("/", getCategories);
categoryRouter.post("/", createCategory);
