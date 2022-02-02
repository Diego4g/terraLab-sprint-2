import { Request, Response } from "express";

import { UsersService } from "../services/UserService";

export class UsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;
    const usersService = new UsersService();
    const user = await usersService.create(email);

    return response.json(user);
  }
}
