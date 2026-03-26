import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { restaurantInfo } from "@/data/menu";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-darker text-white" role="contentinfo">
      {/* Top wave */}
      <div style={{ background: "#FFF8F0", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0 60 C360 0 1080 0 1440 60 V60 H0V60Z" fill="#111111" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-lg">
              <span className="text-3xl font-black text-white">
                Just<span style={{ color: "#F5A623" }}>Bokit</span>
                <span className="text-sm font-semibold ml-2 px-2 py-0.5 rounded-full" style={{ background: "#F5A623", color: "#1C1C1E" }}>Food</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Les saveurs authentiques de la Guadeloupe et du Cameroun à Coignières. Cuisinés maison avec amour.
            </p>
            <div className="flex gap-3">
              <a
                href={restaurantInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                aria-label="Instagram de Just Bokit Food"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={restaurantInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                aria-label="Facebook de Just Bokit Food"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">Navigation</h3>
            <nav aria-label="Liens du pied de page">
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Accueil" },
                  { href: "/menu", label: "La Carte" },
                  { href: "/traiteur", label: "Traiteur" },
                  { href: "/a-propos", label: "À Propos" },
                  { href: "/contact", label: "Contact" },
                  { href: "/panier", label: "Mon Panier" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-brand-yellow text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">Horaires</h3>
            <ul className="space-y-2" aria-label="Horaires d'ouverture">
              {restaurantInfo.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-sm">
                  <span className={h.open ? "text-white/70" : "text-white/30"}>{h.day}</span>
                  <span className={h.open ? "text-white font-medium" : "text-white/30"}>{h.times}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">Nous trouver</h3>
            <address className="not-italic space-y-4">
              <a
                href="https://maps.google.com/?q=6+Rue+René+Laennec+78310+Coignières"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/70 hover:text-white text-sm transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-sm"
              >
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-orange group-hover:text-brand-yellow transition-colors" />
                <span>6 Rue René Laennec<br />78310 Coignières</span>
              </a>
              <a
                href="tel:+33186045451"
                className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-sm"
              >
                <Phone size={18} className="shrink-0 text-brand-orange group-hover:text-brand-yellow transition-colors" />
                <span>01 86 04 54 51</span>
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <Clock size={18} className="mt-0.5 shrink-0 text-brand-orange" />
                <span>Mar – Ven : 11h30 – 22h30<br />Sam : 18h30 – 22h30<br />Dim : 12h00 – 20h00</span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {year} Just Bokit Food. Tous droits réservés.
          </p>
          <p className="text-white/30 text-xs">
            Cuisine afro-caribéenne • Coignières, Yvelines
          </p>
        </div>
      </div>
    </footer>
  );
}
