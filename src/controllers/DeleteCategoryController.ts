import { Request, Response } from "express"
import { DeleteCategoryService } from "../services/DeleteCategoryService";

export class DeleteCategoryController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = new DeleteCategoryService()

    await service.execute(id)

    return response.status(204).json({ message: "Category deleted!"})
  }
}