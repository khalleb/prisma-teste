import { Request, Response } from 'express'
import { CreateDeliveryUserCase } from './CreateDeliveryUserCase';

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { item_name } = request.body;
    const { id_client } = request;
    const createDeliveryUserCase = new CreateDeliveryUserCase();
    const result = await createDeliveryUserCase.execute({
      id_client,
      item_name
    });
    return response.json(result);
  }
}