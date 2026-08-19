import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Learn Python', href: '#topics' },
  { label: 'Examples', href: '#examples' },
  { label: 'Quiz', href: '#quiz' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-white/70 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-yellow-400 shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform">
            <Code2 size={20} strokeWidth={2.5} />
          </span>
          <span className="font-bold text-lg text-slate-800">
            Python <span className="text-blue-600">Learning Hub</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#topics"
            className="inline-flex items-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-semibold text-sm shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 hover:scale-105 active:scale-95 transition-all"
          >
            Start Learning
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <ul className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#topics"
                onClick={() => setOpen(false)}
                className="block text-center px-5 py-3 rounded-xl bg-yellow-400 text-slate-900 font-semibold"
              >
                Start Learning
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
