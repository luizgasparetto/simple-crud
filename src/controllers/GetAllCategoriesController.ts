import { Request, Response } from "express"
import { GetAllCategoryServices } from "../services/GetAllCategoryServices"

export class GetAllCategoryController {
  async handle( request: Request, response: Response ): Promise<Response> {
    const service = new GetAllCategoryServices()

    const getAllCategory = await service.execute()

    return response.json(getAllCategory)
  }
}