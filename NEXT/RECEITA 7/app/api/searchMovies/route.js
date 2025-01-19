import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const titleSearchKey = searchParams.get("titleSearchKey");

    // Fetch data from your database
    const movies = await prisma.movie.findMany({
        where: {
            title: {
                contains: titleSearchKey,
            }
        },
        select: {
            id: true,
            title: true,
            year: true
        }
    });

    return NextResponse.json(movies);
}
