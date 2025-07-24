const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createUser(userData) {
  const user = await prisma.user.create({
    data: userData,
  })
 
  return user;
}

async function getUserByEmailOrUserName(username, email) {
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        {
          username,
        }, 
        {
          email,
        }
      ]
    }
  })

  return user;
}

module.exports = {
  createUser,
  getUserByEmailOrUserName,
}