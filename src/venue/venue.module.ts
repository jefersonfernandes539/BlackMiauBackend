import { Module } from '@nestjs/common';
import { VenueRepository } from './venue.repository';
import { VenueService } from './venue.service';
import { VenueController } from './venue.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [VenueController],
  providers: [
    PrismaService,
    VenueService,
    {
      provide: 'IVenueRepository',
      useClass: VenueRepository,
    },
  ],
})
export class VenueModule {}
