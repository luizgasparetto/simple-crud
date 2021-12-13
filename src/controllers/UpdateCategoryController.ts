import { Request, Response } from "express"
import { UpdateCategoryService } from "../services/UpdateCategoryService"

export class UpdateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name, description } = request.body

    const updateCategoryService = new UpdateCategoryService()

    const result = await updateCategoryService.execute({ id, name, description })

    return response.status(200).json(result)
  }
}