import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-center px-sp-16">
      <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold mb-sp-16">
        404 ERROR
      </span>
      <h1 className="font-serif text-3xl md:text-5xl text-white uppercase tracking-wider mb-sp-16">
        Page Not Found
      </h1>
      <p className="text-white/60 text-xs md:text-sm max-w-[480px] mb-sp-48 leading-relaxed">
        The page you are looking for does not exist, has been removed, or is temporarily unavailable.
      </p>
      <Link href="/" className="btn-gold">
        Return Home
      </Link>
    </main>
  );
}
