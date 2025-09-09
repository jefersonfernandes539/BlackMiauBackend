import { Injectable, Inject } from '@nestjs/common';
import { IVenueRepository } from './venue.repository';
import { VenueFiltersDto } from './dtos/venue-filters.dto';

@Injectable()
export class VenueService {
  constructor(
    @Inject('IVenueRepository')
    private readonly venueRepository: IVenueRepository,
  ) {}

  async getAllVenues(filters?: VenueFiltersDto) {
    return this.venueRepository.getAll(filters);
  }
}
