const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.movie.createMany({
        data: [
            { title: 'The Shawshank Redemption', year: '1994', poster: '' },
            { title: 'The Godfather', year: '1972', poster: '' },
            { title: 'The Dark Knight', year: '2008', poster: '' },
            { title: 'Inception', year: '2010', poster: '' },
            { title: 'Fight Club', year: '1999', poster: '' },
            { title: 'Pulp Fiction', year: '1994', poster: '' },
            { title: 'The Lord of the Rings: The Fellowship of the Ring', year: '2001', poster: '' },
            { title: 'Forrest Gump', year: '1994', poster: '' },
            { title: 'The Matrix', year: '1999', poster: '' },
            { title: 'The Social Network', year: '2010', poster: '' }
        ],
    });
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});
