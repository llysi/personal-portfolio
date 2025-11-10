export default function Socials(){
    return (
        <div className="pt-0 flex items-center justify-start gap-0">
            {/* CTA Button 
            <Link href="/contact"
            className="bg-foreground/10 text-foreground px-8 py-3 rounded-full border-2 border-foreground/0 text-lg 
            font-semibold hover:bg-accent hover:text-background transition-colors"
            >
                Contact Me
            </Link>*/}

            {/* Email Icon*/}
            <a
                href="mailto:alysazhao111@tamu.edu" rel="noopener noreferrer"
                className="pr-3 rounded-full border-0 border-foreground/20 text-foregroundhue text-lg
                font-semibold hover:text-accent hover:border-accent transition-colors"
            >
                <svg width="42" height="42" viewBox="1 3 22 
                15" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6L12 13L22 6V4H2V6ZM2 
                8V18H22V8L12 15L2 8Z"/>
                </svg>
            </a>


            {/* Github Icon*/}
            <a
                href="https://github.com/llysi" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full border-0 border-foreground/20 text-foregroundhue text-lg
                font-semibold hover:text-accent hover:border-accent transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" 
                fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
            </a>

            {/* Linked Icon*/}
            <a
                href="https://linkedin.com/in/alysaz" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full border-0 border-foreground/20 text-foregroundhue text-lg
                font-semibold hover:text-accent hover:border-accent transition-colors"
            >
                <svg width="36" height="36" 
                fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569
                c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136
                1.445-2.136 
                2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 
                1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267
                5.455v6.286zM5.337 7.433a2.062 2.062 0 
                01-2.063-2.065 2.064 2.064 0 112.063 
                2.065zm1.782 
                13.019H3.555V9h3.564v11.452zM22.225 
                0H1.771C.792 0 0 .774 0 1.729v20.542C0 
                23.227.792 24 1.771 24h20.451C23.2 24 24 
                23.227 24 22.271V1.729C24 .774 23.2 0 22.222 
                0h.003z"/>
                    </svg>
            </a>
        </div>
    )
}

