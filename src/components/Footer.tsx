export default function Footer() {
    return (
        <footer className="w-full mt-auto text-textcolor/60">
            <div className="max-w-5xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-2">
                    <p className="text-sm">Let&apos;s create!</p>
                    {/* Email */}
                    <a
                        href="mailto:alysazhao111@tamu.edu"
                        className="uppercase hover:text-accent transition-colors text-sm"
                    >
                        alysazhao111@tamu.edu
                    </a>
                </div>

                {/* Copyright or tagline */}
                <p className="text-sm uppercase">
                    © {new Date().getFullYear()} Alysa Zhao
                </p>
            </div>
        </footer>
    )
}
