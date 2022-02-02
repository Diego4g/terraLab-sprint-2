import { getCustomRepository } from "typeorm";

import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

export class UsersService {
  async create(email: string): Promise<User> {
    const userRepository = getCustomRepository(UsersRepository);

    const userExists = await userRepository.findOne({ email });

    if (userExists) {
      return userExists;
    }

    const user = userRepository.create({ email });

    await userRepository.save(user);

    return user;
  }
}
