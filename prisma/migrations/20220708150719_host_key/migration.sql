/*
  Warnings:

  - Added the required column `key` to the `Host` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Host` ADD COLUMN `key` VARCHAR(191) NOT NULL;
