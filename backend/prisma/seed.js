/* eslint-disable */
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const clearPassword = "admin1234";
  const password = bcrypt.hashSync(clearPassword, 10);

  const users = [
    {
      email: "admin@flyp.fr",
      pseudo: "Admin",
      role: "admin",
    },
    {
      email: "user@flyp.fr",
      pseudo: "User",
      role: "user",
    },
    {
      email: "artist@flyp.fr",
      pseudo: "Artist",
      role: "artist",
    },
  ];

  console.log("");
  console.log("CREATED USERS");

  for (const user of users) {
    const createdUser = await prisma.User.upsert({
      where: { email: user.email },
      update: {},
      create: {
        email: user.email,
        pseudo: user.pseudo,
        role: user.role,
        password,
      },
    });

    console.table({ ...user, password: clearPassword });
  }

  console.log("");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

/* eslint-enabled */

