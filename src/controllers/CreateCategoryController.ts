import { Request, Response } from "express"
import { CreateCategoryService } from "../services/CreateCategoryService"

export class CreateCategoryController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body

    const service = new CreateCategoryService()

    const result = await service.execute({ name, description })

    return response.status(201).json(result)
  }
}