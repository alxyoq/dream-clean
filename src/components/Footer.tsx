export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--charcoal))] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          {/* Gloucester County badge */}
          <img
            src="/GC.png"
            alt="Best of Gloucester County 2023"
            className="h-16 w-auto"
          />
          {/* Your logo */}
          <img
            src="/logo.png"
            alt="Footer Logo"
            className="h-22 w-14"
          />
          <span className="text-sm">© {new Date().getFullYear()} Dream Clean Mobile Detailing</span>
        </div>
        <address className="not-italic text-sm text-center md:text-right">
          212 Truman Ave, Williamstown, NJ 08094<br />
          <a href="tel:+18565628381" className="underline">(856) 562-8381</a> •{' '}
          <a href="mailto:dreamcleanmobile@gmail.com" className="underline">
            dreamcleanmobile@gmail.com
          </a>
        </address>
      </div>
    </footer>
  );
}
