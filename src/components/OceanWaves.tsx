export default function OceanWaves() {
    return (
        <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ height: '40vh', minHeight: '250px' }}
        >
            <defs>
                <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#4596cd', stopOpacity: 0.8 }} />
                    <stop offset="50%" style={{ stopColor: '#3567ae', stopOpacity: 0.9 }} />
                    <stop offset="100%" style={{ stopColor: '#2a4a7f', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="waveHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#86bdd8', stopOpacity: 0.6 }} />
                    <stop offset="100%" style={{ stopColor: '#4596cd', stopOpacity: 0.3 }} />
                </linearGradient>
            </defs>

            {/* Base ocean layer */}
            <path
                fill="url(#oceanGradient)"
                d="M0,160 L48,176 C96,192 192,224 288,224 C384,224 480,192 576,176 C672,160 768,160 864,176 C960,192 1056,224 1152,224 C1248,224 1344,192 1392,176 L1440,160 L1440,320 L0,320 Z"
            />

            {/* Middle wave layer with lighter blue */}
            <path
                fill="url(#waveHighlight)"
                d="M0,224 L48,213.3 C96,203 192,181 288,181.3 C384,181 480,203 576,213.3 C672,224 768,224 864,213.3 C960,203 1056,181 1152,181.3 C1248,181 1344,203 1392,213.3 L1440,224 L1440,320 L0,320 Z"
                opacity="0.5"
            />

            {/* Top wave highlight */}
            <path
                fill="#86bdd8"
                d="M0,256 L48,245.3 C96,235 192,213 288,213.3 C384,213 480,235 576,245.3 C672,256 768,256 864,245.3 C960,235 1056,213 1152,213.3 C1248,213 1344,235 1392,245.3 L1440,256 L1440,320 L0,320 Z"
                opacity="0.3"
            />
        </svg>
    )
}
