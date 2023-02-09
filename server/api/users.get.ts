// export default defineEventHandler(async (event) => {
//   console.log('event.context:', event.context);
//   const res = await event.context.pg.query('SELECT * FROM users');
//   await event.context.pg.end();
//   // console.log('users', res.rows);
//   return {
//     users: res.rows
//   }
// })

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  console.log('event.context:', event.context);
  return prisma.users.findMany();
})