export default function Footer() {
    return (
        <footer className="w-full mt-auto uppercase text-textcolor/60">
            <div className="max-w-5xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    {/* Email */}
                    <a
                        href="mailto:alysazhao111@tamu.edu"
                        className="hover:text-accent transition-colors text-sm"
                    >
                        alysazhao111@tamu.edu
                    </a>
                </div>

                {/* Copyright or tagline */}
                <p className="text-sm">
                    © {new Date().getFullYear()} Alysa Zhao
                </p>
            </div>
        </footer>
    )
}
