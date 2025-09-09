import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { IUserRepository } from './user.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(IUserRepository) private readonly userRepository: IUserRepository,
  ) {}

  async getById(id: string) {
    const user = await this.userRepository.getById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async getAll() {
    return this.userRepository.getAll();
  }

  async create(data: CreateUserDto) {
    return this.userRepository.create(data);
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.userRepository.getById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return this.userRepository.update(id, data);
  }

  async delete(id: string) {
    const user = await this.userRepository.getById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    await this.userRepository.delete(id);
    return { message: 'User deleted successfully' };
  }
}
