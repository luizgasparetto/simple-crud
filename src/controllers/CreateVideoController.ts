import { Request, Response } from "express"
import { CreateVideoService } from "../services/CreateVideoService"

export class CreateVideoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, duration, category_id } = request.body

    const service = new CreateVideoService()

    const video = await service.execute({ name, description, duration, category_id })

    return response.status(201).json(video)
  }
}