import prisma from '../../db/client';

export async function createUser(user) {
  if (user.acceptTermsAndConditions) {
    return await prisma.user.create({
      data: user,
    })
  } else {
    return new Error('User must accept terms!')
  }
}

export async function updateUsername(user) {
  return await prisma.user.update({
    where: { id: user.id },
    data: user,
  })
}