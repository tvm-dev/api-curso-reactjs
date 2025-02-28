-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cliente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "idade" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Cliente" ("email", "endereco", "id", "nome", "telefone") SELECT "email", "endereco", "id", "nome", "telefone" FROM "Cliente";
DROP TABLE "Cliente";
ALTER TABLE "new_Cliente" RENAME TO "Cliente";
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
