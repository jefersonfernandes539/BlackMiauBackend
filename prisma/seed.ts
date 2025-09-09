import {
  PrismaClient,
  UserType,
  Sender,
  BookingStatus,
} from '../generated/prisma';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const venues = await Promise.all([
    prisma.user.create({
      data: {
        name: 'Venue A',
        email: 'venueA@example.com',
        password: await bcrypt.hash('123456', 10),
        type: UserType.VENUE,
        venue: {
          create: {
            venueName: 'The Rock Hall',
            address: '123 Main St',
            preferredMusicType: 'Rock',
            capacity: 200,
            latitude: 40.7128,
            longitude: -74.006,
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        name: 'Venue B',
        email: 'venueB@example.com',
        password: await bcrypt.hash('123456', 10),
        type: UserType.VENUE,
        venue: {
          create: {
            venueName: 'Jazz Corner',
            address: '456 Jazz Ave',
            preferredMusicType: 'Jazz',
            capacity: 100,
            latitude: 41.8781,
            longitude: -87.6298,
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        name: 'Venue C',
        email: 'venueC@example.com',
        password: await bcrypt.hash('123456', 10),
        type: UserType.VENUE,
        venue: {
          create: {
            venueName: 'Classical Palace',
            address: '789 Symphony Rd',
            preferredMusicType: 'Classical',
            capacity: 150,
            latitude: 34.0522,
            longitude: -118.2437,
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        name: 'Venue D',
        email: 'venueD@example.com',
        password: await bcrypt.hash('123456', 10),
        type: UserType.VENUE,
        venue: {
          create: {
            venueName: 'Pop Arena',
            address: '101 Pop Blvd',
            preferredMusicType: 'Pop',
            capacity: 300,
            latitude: 51.5074,
            longitude: -0.1278,
          },
        },
      },
    }),
  ]);

  console.log(
    'Venues criados:',
    venues.map((v) => v.name),
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
