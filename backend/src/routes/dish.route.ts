import { Router } from "express";
import {
  createDish,
  deleteDish,
  getDishes,
  updateDish,
} from "../resolvers/dish.resolver";

export const dishRouter = Router();

dishRouter.get("/", getDishes);
dishRouter.post("/", createDish);
dishRouter.put("/:id", updateDish);
dishRouter.delete("/:id", deleteDish);
