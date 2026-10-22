import { useEffect, useState } from 'react';
import { Menu, X, Cpu, ArrowRight } from 'lucide-react';
import { navLinks } from '@/data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-950/20'
          : 'bg-navy-900'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0 group" onClick={closeMenu}>
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-techblue-500 transition-transform duration-300 group-hover:scale-110">
              <Cpu className="w-5 h-5 text-white" strokeWidth={2.2} />
            </span>
            <span className="text-xl font-bold font-heading text-white tracking-tight">
              Tech<span className="text-techblue-400">Solve</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-navy-100 rounded-lg hover:bg-white/10 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-techblue-500 text-white text-sm font-semibold rounded-lg hover:bg-techblue-400 transition-all duration-200 shadow-md shadow-techblue-900/30 hover:shadow-lg hover:shadow-techblue-600/40 hover:-translate-y-0.5"
            >
              Get Help
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-base font-medium text-navy-100 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-techblue-500 text-white font-semibold rounded-lg"
              >
                Get Help
                <ArrowRight className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
