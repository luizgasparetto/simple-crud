import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Videos } from "../entities/Videos";
import { AppError } from "../errors/AppError";

interface IRequest {
  name: string;
  description: string;
  duration: number;
  category_id: string
}

export class CreateVideoService {
  async execute({ name, description, duration, category_id}: IRequest): Promise<Videos> {
    const repo = getRepository(Videos)
    const repoCategory = getRepository(Category)

    const category = await repoCategory.findOne(category_id)

    if(!category) {
      throw new AppError("Category doesn't exists")
    }

    const video = repo.create({
      name,
      description,
      duration,
      category_id
    })

    await repo.save(video)

    return video
  }
}