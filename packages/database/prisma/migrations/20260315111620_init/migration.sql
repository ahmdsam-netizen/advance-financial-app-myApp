/*
  Warnings:

  - You are about to drop the column `creditId` on the `OffRampTransaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[withdrawId]` on the table `OffRampTransaction` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `withdrawId` to the `OffRampTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OffRampTransaction" DROP CONSTRAINT "OffRampTransaction_creditId_fkey";

-- DropIndex
DROP INDEX "OffRampTransaction_creditId_key";

-- AlterTable
ALTER TABLE "OffRampTransaction" DROP COLUMN "creditId",
ADD COLUMN     "withdrawId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TransferTransaction" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "OffRampTransaction_withdrawId_key" ON "OffRampTransaction"("withdrawId");

-- AddForeignKey
ALTER TABLE "OffRampTransaction" ADD CONSTRAINT "OffRampTransaction_withdrawId_fkey" FOREIGN KEY ("withdrawId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
