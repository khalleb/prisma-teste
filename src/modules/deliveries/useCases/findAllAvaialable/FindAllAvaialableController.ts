import { Request, Response } from 'express'
import { FindAllAvaialableUseCase } from './FindAllAvaialableUseCase';

export class FindAllAvaialableController {
  async handle(request: Request, response: Response) {
    const findAllAvaialableUseCase = new FindAllAvaialableUseCase();
    const result = await findAllAvaialableUseCase.execute();
    return response.json(result);
  }
}