import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { AppError } from "../errors/AppError";

interface IRequest {
  name: string,
  description: string
}

export class CreateCategoryService {

  async execute({ name, description }: IRequest ): Promise<Category> {
    const repo = getRepository(Category);

    const categoryExists = await repo.findOne({ name })

    if (categoryExists) {
      throw new AppError("Category already exists...")
    }

    const category = repo.create({
      name,
      description
    })

    await repo.save(category)

    return category
  }
}