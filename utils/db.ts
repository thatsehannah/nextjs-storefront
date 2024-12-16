//this is copy and pasted from prisma's docs. from my understanding, this just sets up
//a single prisma client to use for CRUD applications throughout the application. So
//whenever we instantiate a prisma client (e.g. const prisma = new PrismaClient() for accessing
//a table in the db), it's using the same instance across the app
import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
