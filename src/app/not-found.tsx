import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4" style={{ minHeight: 'calc(100vh - 128px)' }}>
      <h1 className="text-6xl font-heading text-foreground mb-4">Error 404</h1>
      <p className="text-lg text-textcolor mb-4">
        This page is under construction. Check back soon!
      </p>
      <Link
        href="/"
        className="text-foreground hover:text-accent transition-colors underline"
      >
        Return home
      </Link>
    </div>
  )
}
