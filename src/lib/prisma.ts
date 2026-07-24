import type { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

function makePrismaClient(): PrismaClient {
    try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { PrismaClient: PC } = require('@prisma/client')
        return new PC({ log: [] })
    } catch (e) {
        console.error('[Prisma] failed to load:', e)
        return null as unknown as PrismaClient
    }
}

export const prisma = globalForPrisma.prisma ?? makePrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma