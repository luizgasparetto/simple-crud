import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { AppError } from "../errors/AppError";


export class DeleteCategoryService {
  async execute(id: string): Promise<void> {
    const repo = getRepository(Category)

    const categoryExists = repo.findOne(id)

    if(!categoryExists) {
      throw new AppError("Category doesn't exists...")
    }

    await repo.delete(id)
  }
}