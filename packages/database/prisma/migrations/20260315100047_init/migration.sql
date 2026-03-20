/*
  Warnings:

  - You are about to drop the column `Provider` on the `OnRampTransaction` table. All the data in the column will be lost.
  - Added the required column `provider` to the `OnRampTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OnRampTransaction" DROP COLUMN "Provider",
ADD COLUMN     "provider" TEXT NOT NULL;
