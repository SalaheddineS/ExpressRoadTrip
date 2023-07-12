-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_customersId_fkey";

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "customersId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_customersId_fkey" FOREIGN KEY ("customersId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
