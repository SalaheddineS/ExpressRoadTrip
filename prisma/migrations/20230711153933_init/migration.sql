/*
  Warnings:

  - You are about to drop the column `bio` on the `Customer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "bio",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "mobile" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");
