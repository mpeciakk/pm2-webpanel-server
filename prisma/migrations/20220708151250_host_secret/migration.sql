/*
  Warnings:

  - You are about to drop the column `key` on the `Host` table. All the data in the column will be lost.
  - Added the required column `secret` to the `Host` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Host` DROP COLUMN `key`,
    ADD COLUMN `secret` VARCHAR(191) NOT NULL;
