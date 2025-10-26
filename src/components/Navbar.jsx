import { useState } from 'react';
import { Menu, X, Car, Phone, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Packages', href: '#packages' },
    { label: 'Book Now', href: '#book' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-gray-900 font-semibold tracking-tight">
            <Car className="w-6 h-6 text-blue-600" aria-hidden="true" />
            <span className="text-lg">Coimbatore Cabs</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/+918220004199"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a
              href="tel:+918220004199"
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-1 rounded-2xl border border-black/5 bg-white p-3 shadow-sm">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <a
                  href="https://wa.me/+918220004199"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a
                  href="tel:+918220004199"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  <Phone className="w-4 h-4" /> Call
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
