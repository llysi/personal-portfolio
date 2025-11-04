import Socials from './Socials'
import RotatingText from './RotatingText'

export default function Hero() {
    return (
        <section className="flex items-start justify-start px-4 pt-32" style={{ minHeight: 'calc(100vh - 128px)' }}>
        {/* TODO: Add background gradient */}

        <div className="text-left space-y-8">
            {/* Name - Large heading */}
            <h1 className="text-5xl md:text-7xl text-foreground font-heading">
                Alysa Zhao
            </h1>

            {/* Tagline */}
            {/* <p className="text-xl md:text-2xl text-foreground/80">
                *Insert some bio here*
            </p>*/}

              {/* Bio Section - ADD THIS */}
                <div className="pt-0 text-left">
                    {/* Professional Summary */}
                    <p className="text-base md:text-lg text-textcolor mb-6 max-w-xl ">
                    Hi! I&apos;m Alysa. I&apos;m pursuing a B.S. in Computer Science with a minor in Math at Texas A&M University.
                    I love building creative and functional software, and hope to make the world a little cooler with it.
                    </p>
                    <p className="text-base md:text-lg text-textcolor mb-6 max-w-2xl">
                        You can find me{' '}
                        <RotatingText
                            phrases={[
                                "debugging spaghetti as a Teacher Assistant.",
                                "designing merch for student orgs.",
                                "pulling all nighters (and repos) at hackathons.",
                                "learning k-pop dances with Royal Aces Dance Crew.",
                                "revamping websites for student orgs.",
                                "baking desserts for friends.",
                            ]}
                            className="text-accent font-semibold"
                        />
                    </p>
            </div>


            {/* Bio Section - ADD THIS */}
            <Socials />
                
            {/* Skills Grid 
            <div className="flex flex-wrap 
                justify-center gap-3">
                    <span className="px-4 py-2 bg-foreground/10 text-foreground 
                    rounded-full text-sm font-medium">
                        React
                    </span>
                    <span className="px-4 py-2 bg-foreground/10 text-foreground 
                    rounded-full text-sm font-medium">
                        Next.js
                    </span>
                    <span className="px-4 py-2 bg-foreground/10 text-foreground 
                    rounded-full text-sm font-medium">
                        Typescript
                    </span>
                    <span className="px-4 py-2 bg-foreground/10 text-foreground 
                    rounded-full text-sm font-medium">
                        Python
                    </span>
                    <span className="px-4 py-2 bg-foreground/10 text-foreground 
                    rounded-full text-sm font-medium">
                        Digital Art
                    </span>
                    <span className="px-4 py-2 bg-foreground/10 text-foreground 
                    rounded-full text-sm font-medium">
                        AI/ML
                    </span>
                    <span className="px-4 py-2 bg-foreground/10 text-foreground 
                    rounded-full text-sm font-medium">
                        UI/UX
                    </span>
                </div>*/}
                    
            </div>
        </section>
    )
}