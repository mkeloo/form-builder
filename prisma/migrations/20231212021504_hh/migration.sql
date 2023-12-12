/*
  Warnings:

  - You are about to drop the column `created` on the `Form` table. All the data in the column will be lost.
  - You are about to drop the column `created` on the `FormSubmission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Form" DROP COLUMN "created",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "FormSubmission" DROP COLUMN "created",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
