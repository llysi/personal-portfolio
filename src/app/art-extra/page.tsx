import Image from 'next/image';

interface ArtPiece {
    id: string;
    image: string;
    title: string;
    order: number;
}

const currentArtPieces: ArtPiece[] = [
    {
        id: "1",
        image: "/art/a1.jpg",
        title: "Art Piece 1",
        order: 1
    },
    {
        id: "2",
        image: "/art/a2.jpg",
        title: "Art Piece 2",
        order: 2
    },
    {
        id: "3",
        image: "/art/a3.jpg",
        title: "Art Piece 3",
        order: 3
    },
    {
        id: "4",
        image: "/art/a4.gif",
        title: "Art Piece 4",
        order: 4
    },
    {
        id: "5",
        image: "/art/a5.JPG",
        title: "Art Piece 5",
        order: 5
    },
    {
        id: "6",
        image: "/art/a6.jpg",
        title: "Art Piece 6",
        order: 6
    },
    {
        id: "7",
        image: "/art/a7.jpg",
        title: "Art Piece 7",
        order: 7
    },
    {
        id: "8",
        image: "/art/a10.jpg",
        title: "Art Piece 8",
        order: 8
    },
    {
        id: "9",
        image: "/art/a8.png",
        title: "Art Piece 9",
        order: 9
    },
    {
        id: "10",
        image: "/art/conveyor.gif",
        title: "Art Piece 10",
        order: 10
    }

    // Add more current art pieces here
];

const clubArtPieces: ArtPiece[] = [
    {
        id: "club-1",
        image: "/art/grid_left.svg",
        title: "Grid Left",
        order: 1
    },
    {
        id: "club-2",
        image: "/art/grid_mid.svg",
        title: "Grid Mid",
        order: 2
    },
    {
        id: "club-3",
        image: "/art/grid_right.svg",
        title: "Grid Right",
        order: 3
    }

    // Add more club art pieces here
];

function distributeIntoColumns(pieces: ArtPiece[]): ArtPiece[][] {
    const sorted = [...pieces].sort((a, b) => a.order - b.order);

    // Distribute items across 3 columns in row-first order
    const columns: ArtPiece[][] = [[], [], []];
    sorted.forEach((piece, index) => {
        columns[index % 3].push(piece);
    });
    return columns;
}

function ArtGrid({ pieces }: { pieces: ArtPiece[] }) {
    const columns = distributeIntoColumns(pieces);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {columns.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-8">
                    {column.map((piece) => (
                        <div key={piece.id}>
                            <div className="relative w-full bg-white overflow-hidden">
                                <Image
                                    src={piece.image}
                                    alt={piece.title}
                                    width={800}
                                    height={800}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default function ArtPage() {
    return (
        <div className="pt-12 pb-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-light font-heading text-foreground mb-12">
                    ART<span className="italic">++</span>
                </h1>

                <section className="mb-16">
                    <h2 className="text-2xl sm:text-3xl font-light font-heading text-foreground mb-6">
                        For Orgs.
                    </h2>
                    <ArtGrid pieces={clubArtPieces} />
                </section>

                <section>
                    <h2 className="text-2xl sm:text-3xl font-light font-heading text-foreground mb-6">
                        Personal
                    </h2>
                    <ArtGrid pieces={currentArtPieces} />
                </section>
            </div>
        </div>
    );
}
