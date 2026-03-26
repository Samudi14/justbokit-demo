"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X, Phone } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "La Carte" },
  { href: "/traiteur", label: "Traiteur" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-lg"
              aria-label="Just Bokit Food - Retour à l'accueil"
            >
              <span
                className="text-2xl md:text-3xl font-black tracking-tight"
                style={{
                  color: scrolled || !isHome ? "#E8651A" : "white",
                  textShadow: scrolled || !isHome ? "none" : "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                Just<span style={{ color: "#F5A623" }}>Bokit</span>
              </span>
              <span
                className="hidden sm:inline text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full"
                style={{
                  background: "#F5A623",
                  color: "#1C1C1E",
                }}
              >
                Food
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-sm ${
                    pathname === link.href
                      ? "text-brand-orange"
                      : scrolled || !isHome
                      ? "text-gray-700 hover:text-brand-orange"
                      : "text-white hover:text-brand-yellow"
                  }`}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {/* Phone — desktop */}
              <a
                href="tel:+33186045451"
                className={`hidden md:flex items-center gap-2 text-sm font-semibold transition-colors ${
                  scrolled || !isHome ? "text-gray-700 hover:text-brand-orange" : "text-white hover:text-brand-yellow"
                }`}
                aria-label="Appeler Just Bokit Food"
              >
                <Phone size={16} />
                <span className="hidden xl:inline">01 86 04 54 51</span>
              </a>

              {/* Cart */}
              <Link
                href="/panier"
                className="relative flex items-center justify-center w-11 h-11 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                style={{
                  background: scrolled || !isHome ? "#FFF8F0" : "rgba(255,255,255,0.2)",
                  color: scrolled || !isHome ? "#E8651A" : "white",
                }}
                aria-label={`Panier — ${itemCount} article${itemCount !== 1 ? "s" : ""}`}
              >
                <ShoppingCart size={20} />
                <AnimatePresence>
                  {itemCount > 0 && (
                    <motion.span
                      key="badge"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-black flex items-center justify-center text-white"
                      style={{ background: "#E8651A" }}
                      aria-hidden="true"
                    >
                      {itemCount > 9 ? "9+" : itemCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>

              {/* Commander CTA — desktop */}
              <Link
                href="/menu"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                style={{
                  background: "linear-gradient(135deg, #F5A623, #E8651A)",
                  boxShadow: "0 4px 15px rgba(232,101,26,0.4)",
                }}
              >
                Commander
              </Link>

              {/* Hamburger — mobile */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                style={{
                  background: scrolled || !isHome ? "#FFF8F0" : "rgba(255,255,255,0.2)",
                  color: scrolled || !isHome ? "#1C1C1E" : "white",
                }}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] z-50 flex flex-col lg:hidden"
              style={{ background: "#1C1C1E" }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu mobile"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="text-2xl font-black text-white">
                  Just<span style={{ color: "#F5A623" }}>Bokit</span>
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                  aria-label="Fermer le menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 py-6 px-4 space-y-1" aria-label="Navigation mobile">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center px-4 py-4 rounded-xl text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow ${
                        pathname === link.href
                          ? "text-brand-yellow"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                      aria-current={pathname === link.href ? "page" : undefined}
                    >
                      {link.label}
                      {pathname === link.href && (
                        <span className="ml-auto w-2 h-2 rounded-full bg-brand-yellow" aria-hidden="true" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="p-6 border-t border-white/10 space-y-3">
                <Link href="/menu" className="btn-primary w-full justify-center">
                  Commander maintenant
                </Link>
                <a
                  href="tel:+33186045451"
                  className="flex items-center justify-center gap-2 py-3 text-white/70 text-sm font-medium hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  01 86 04 54 51
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for non-hero pages */}
      {!isHome && <div className="h-16 md:h-20" aria-hidden="true" />}
    </>
  );
}
