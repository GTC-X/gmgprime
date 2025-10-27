'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-primary-950/80 backdrop-blur-sm">
      <nav className="container-balanced flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={42} height={42} />
          <span className="sr-only">Home</span>
        </Link>
        <ul className="hidden lg:flex items-center gap-8 text-sm text-neutral-200">
          <li><Link href="#" className="hover:text-white">Home</Link></li>
          <li><Link href="#" className="hover:text-white">Pricing</Link></li>
          <li><Link href="#" className="hover:text-white">Technology</Link></li>
          <li><Link href="#" className="hover:text-white">Resources</Link></li>
        </ul>
        <div className="flex items-center gap-3">
          <Link href="#" className="btn-outline hidden md:inline-flex">Book a call</Link>
          <Link href="#" className="btn-primary">Client Area</Link>
        </div>
      </nav>
    </header>
  )
}
