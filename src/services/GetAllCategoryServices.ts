import { getRepository } from "typeorm";
import { Category } from "../entities/Category";


export class GetAllCategoryServices {
  async execute() {
    const repo = getRepository(Category)

    const categories = await repo.find()

    return categories
  }
}