import { Injectable } from '@nestjs/common';
import { VenueFiltersDto } from './dtos/venue-filters.dto';
import { PrismaService } from 'src/database/prisma.service';

export interface IVenueRepository {
  getAll(filters?: VenueFiltersDto): Promise<any[]>;
}

@Injectable()
export class VenueRepository implements IVenueRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(filters?: VenueFiltersDto): Promise<any[]> {
    const where: any = {};

    if (filters?.musicType) {
      where.preferredMusicType = {
        contains: filters.musicType,
        mode: 'insensitive',
      };
    }

    if (filters?.city) {
      where.address = { contains: filters.city, mode: 'insensitive' };
    }

    if (filters?.minPrice || filters?.maxPrice) {
      where.capacity = {};
      if (filters.minPrice) where.capacity.gte = filters.minPrice;
      if (filters.maxPrice) where.capacity.lte = filters.maxPrice;
    }

    if (filters?.date) {
      where.bookings = {
        none: {
          date: filters.date,
        },
      };
    }

    if (filters?.search) {
      where.OR = [
        { name: { contains: filters.search, mode: 'insensitive' } },
        { description: { contains: filters.search, mode: 'insensitive' } },
        { address: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    return this.prisma.venue.findMany({
      where,
      include: {
        bookings: true,
        chats: true,
        favoritedBy: true,
        user: true,
      },
    });
  }
}
