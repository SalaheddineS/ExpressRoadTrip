import { PrismaClient } from '@prisma/client';

export class PrismaCli {
  public static Prisma: PrismaClient = new PrismaClient();
}

export default PrismaCli;
