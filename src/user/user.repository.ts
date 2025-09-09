import { Injectable, Inject } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

export interface IUserRepository {
  getById(id: string): Promise<any | null>;
  getAll(): Promise<any[]>;
  create(data: CreateUserDto): Promise<any>;
  update(id: string, data: UpdateUserDto): Promise<any>;
  delete(id: string): Promise<void>;
}

export const IUserRepository = Symbol('IUserRepository');

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async getById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async getAll() {
    return this.prisma.user.findMany();
  }

  async create(data: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        type: data.type,
        profilePhoto: data.profilePhoto ?? null,
        phone: data.phone ?? null,
      },
    });
  }

  async update(id: string, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.prisma.user.delete({ where: { id } });
  }
}
