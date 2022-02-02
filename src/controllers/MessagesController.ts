import { Request, Response } from "express";

import { MessageService } from "../services/MessagesService";

export class MessagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { admin_id, text, user_id } = request.body;
    const messagesService = new MessageService();

    const message = await messagesService.create({
      admin_id,
      text,
      user_id,
    });

    return response.json(message);
  }
}
