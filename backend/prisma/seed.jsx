import { prisma } from './db';  // Import the Prisma client to interact with the database

// This script seeds the database with initial cities and other required data
async function main() {
  // Seed initial cities
  const cities = await prisma.city.createMany({
    data: [
      {
        name: 'Arkham',
        description: 'A city of dark mysteries and ancient secrets.',
        price: 1000.0,
      },
      {
        name: 'Innsmouth',
        description: 'A coastal town with an unsettling atmosphere.',
        price: 1500.0,
      },
      {
        name: 'Dunwich',
        description: 'A rural town with a dark history of unknown horrors.',
        price: 1200.0,
      },
      {
        name: 'Kingsport',
        description: 'A historic seaport with a strong connection to the unknown.',
        price: 1100.0,
      },
    ],
  });

  console.log('Cities have been seeded:', cities);
}

// Run the seeding function and handle errors
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();  // Ensure the Prisma client disconnects after seeding
  });
