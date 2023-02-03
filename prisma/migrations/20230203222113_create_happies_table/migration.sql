-- CreateTable
CREATE TABLE "happy" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "happy_pkey" PRIMARY KEY ("id")
);
