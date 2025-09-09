import { Controller, Get, Query } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueFiltersDto } from './dtos/venue-filters.dto';

@Controller('venues')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @Get()
  async getAll(@Query() filters: VenueFiltersDto) {
    return this.venueService.getAllVenues(filters);
  }
}
