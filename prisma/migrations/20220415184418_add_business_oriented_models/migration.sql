/*
  Warnings:

  - You are about to drop the `Lesson` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Lesson";

-- CreateTable
CREATE TABLE "Clients" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);
