-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandLord" (
    "userId" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyEmail" TEXT NOT NULL,
    "companyPassword" TEXT NOT NULL,
    "companyDesc" TEXT NOT NULL,

    CONSTRAINT "LandLord_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "RentalPlace" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "landLordId" TEXT NOT NULL,

    CONSTRAINT "RentalPlace_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "LandLord" ADD CONSTRAINT "LandLord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentalPlace" ADD CONSTRAINT "RentalPlace_landLordId_fkey" FOREIGN KEY ("landLordId") REFERENCES "LandLord"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
