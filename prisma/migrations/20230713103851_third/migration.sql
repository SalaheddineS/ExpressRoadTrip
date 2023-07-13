-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CustomerToRole" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CustomerToRole_AB_unique" ON "_CustomerToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_CustomerToRole_B_index" ON "_CustomerToRole"("B");

-- AddForeignKey
ALTER TABLE "_CustomerToRole" ADD CONSTRAINT "_CustomerToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomerToRole" ADD CONSTRAINT "_CustomerToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
