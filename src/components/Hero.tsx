import Link from 'next/link'

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4">
        {/* TODO: Add background gradient */}

        <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Name - Large heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Alysa Zhao
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-foreground/80">
                Full-stack developer and digital artist. Learning AI.
            </p>

            <div className="pt-4 flex items-center justify-center gap-4">
                {/* CTA Button */}
                <Link href="/contact"
                className="bg-foreground/10 text-foreground px-8 py-3 rounded-full border-2 border-foreground/0 text-lg 
                font-semibold hover:bg-accent hover:text-background transition-colors"
                >
                    Contact Me
                </Link>

                {/* Github Icon*/}
                <a
                    href="https://github.com/llysi" target="_blank" rel="noopener noreferrer"
                    className="p-3 rounded-full border-0 border-foreground/20 text-foreground text-lg 
                    font-semibold hover:text-accent hover:border-accent transition-colors"
                >
                    Github-Placeholder
                    {/*TODO: github svg*/}
                </a>

                {/* Linked Icon*/}
                <a
                    href="https://linkedin.com/in/alysaz" target="_blank" rel="noopener noreferrer"
                    className="p-3 rounded-full border-0 border-foreground/20 text-foreground text-lg 
                    font-semibold hover:text-accent hover:border-accent transition-colors"
                >
                    Linkedin-Placeholder
                    {/*TODO: linkedin svg*/}
                </a>
            </div>
        </div>
        </section>
    )
}