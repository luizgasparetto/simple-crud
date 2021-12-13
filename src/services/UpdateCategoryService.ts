import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { AppError } from "../errors/AppError";

interface IRequest {
  id: string;
  name: string,
  description: string
}

export class UpdateCategoryService {
  async execute({ id, name, description }: IRequest): Promise<Category> {
    const repo =  getRepository(Category)

    const category = await repo.findOne(id)

    if(!category) {
      throw new AppError("Category doesn't exists...")
    }

    category.name = name ? name : category.name
    category.description = description ? description : category.description

    await repo.save(category)

    return category
  }
}