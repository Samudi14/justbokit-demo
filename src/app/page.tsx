"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  MapPin,
  Clock,
  Phone,
  ChefHat,
  Truck,
  Users,
  Leaf,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { menuItems, restaurantInfo, testimonials } from "@/data/menu";

const featuredCategories = [
  {
    id: "bokits",
    title: "Bokits",
    subtitle: "Notre signature",
    description: "Pain frit croustillant garni à la demande avec des produits frais. L'emblème des Antilles.",
    emoji: "🫓",
    color: "#F5A623",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
  },
  {
    id: "grillades",
    title: "Grillades",
    subtitle: "Cuits à la flamme",
    description: "Brochettes, ailes et poulets marinés aux épices africaines, grillés à la perfection.",
    emoji: "🔥",
    color: "#E8651A",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop",
  },
  {
    id: "agoulous",
    title: "Agoulous",
    subtitle: "Généreux & savoureux",
    description: "Grande galette enroulée autour des saveurs du monde : agneau, poulet, bœuf ou végétarien.",
    emoji: "🌯",
    color: "#2D9B5C",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&h=400&fit=crop",
  },
  {
    id: "entrees",
    title: "Acras & Entrées",
    subtitle: "Pour bien commencer",
    description: "Acras de morue, pastels, samoussas — les bouchées créoles qui ouvrent l'appétit.",
    emoji: "🫕",
    color: "#7C3AED",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=400&fit=crop",
  },
];

const popularItems = menuItems.filter((m) => m.isPopular).slice(0, 4);

const values = [
  { icon: ChefHat, title: "Cuisinés maison", desc: "Chaque plat préparé à la demande avec des produits frais.", color: "#F5A623" },
  { icon: Leaf, title: "Produits frais", desc: "Des ingrédients de qualité sélectionnés pour chaque recette.", color: "#2D9B5C" },
  { icon: Truck, title: "Livraison", desc: "Profitez de nos saveurs chez vous, livrées rapidement.", color: "#E8651A" },
  { icon: Users, title: "Service traiteur", desc: "Mariages, anniversaires, événements — on s'occupe de tout.", color: "#7C3AED" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop&q=90"
            alt="Ambiance restaurant Just Bokit Food"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(17,17,17,0.6) 0%, rgba(17,17,17,0.75) 50%, rgba(17,17,17,0.9) 100%)" }}
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: "rgba(245,166,35,0.2)", border: "1px solid rgba(245,166,35,0.4)", color: "#F5A623" }}
          >
            <span aria-hidden="true">🌴</span>
            <span>Cuisine Afro-Caribéenne • Coignières</span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6"
          >
            Le goût des{" "}
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #F5A623, #E8651A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Antilles,
            </span>
            ici et maintenant.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Bokits croustillants, grillades savoureuses, plats créoles et africains cuisinés maison —
            une rencontre entre la Guadeloupe et le Cameroun dans chaque assiette.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/menu" className="btn-primary text-base px-8 py-4">
              Voir la carte
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/traiteur" className="btn-secondary text-base px-8 py-4">
              Service traiteur
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-14 flex flex-wrap justify-center gap-8 text-sm"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex" aria-label="Note 5 étoiles">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} style={{ color: "#F5A623", fill: "#F5A623" }} aria-hidden="true" />
                ))}
              </div>
              <span>+200 avis 5 étoiles</span>
            </div>
            <span aria-hidden="true" style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
            <span>🫓 Bokits depuis 2021</span>
            <span aria-hidden="true" style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
            <span>📍 Coignières (78)</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Découvrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{ width: "1.25rem", height: "2rem", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "0.375rem" }}
          >
            <div style={{ width: "0.25rem", height: "0.5rem", borderRadius: "9999px", background: "rgba(255,255,255,0.5)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── NOS SPÉCIALITÉS ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8" style={{ background: "#FFF8F0" }} aria-labelledby="specialites-heading">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4" style={{ background: "rgba(245,166,35,0.15)", color: "#E8651A" }}>
              Nos catégories
            </span>
            <h2 id="specialites-heading" className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#1C1C1E" }}>
              Nos{" "}
              <span style={{ background: "linear-gradient(135deg,#F5A623,#E8651A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                spécialités
              </span>
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "#6B7280" }}>
              Un voyage culinaire entre Guadeloupe et Cameroun, dans chaque bouchée.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((cat, i) => (
              <AnimatedSection key={cat.id} delay={i * 0.1}>
                <Link
                  href={`/menu?cat=${cat.id}`}
                  className="group relative block overflow-hidden rounded-2xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ minHeight: "320px", focusRingColor: "#F5A623" } as React.CSSProperties}
                >
                  <Image
                    src={cat.image}
                    alt={`${cat.title} — ${cat.subtitle}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{ background: "linear-gradient(to top, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.5) 50%, rgba(17,17,17,0.1) 100%)" }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                    <span className="text-3xl mb-2" aria-hidden="true">{cat.emoji}</span>
                    <span className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: cat.color }}>{cat.subtitle}</span>
                    <h3 className="text-xl font-black mb-1">{cat.title}</h3>
                    <p className="text-sm leading-snug line-clamp-2 mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>{cat.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-bold transition-transform duration-300 group-hover:translate-x-1" style={{ color: cat.color }}>
                      Voir la carte <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATS POPULAIRES ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8" style={{ background: "#1C1C1E" }} aria-labelledby="populaires-heading">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4" style={{ background: "rgba(245,166,35,0.15)", color: "#F5A623" }}>
                Les plus commandés
              </span>
              <h2 id="populaires-heading" className="text-4xl md:text-5xl font-black text-white">
                Nos incontournables
              </h2>
            </div>
            <Link href="/menu" className="shrink-0 inline-flex items-center gap-2 text-sm font-bold transition-colors hover:opacity-80" style={{ color: "#F5A623" }}>
              Voir toute la carte <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.1}>
                <div
                  className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      {item.isPopular && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "#F5A623", color: "#111" }}>⭐ Populaire</span>
                      )}
                    </div>
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full font-black text-sm text-white" style={{ background: "rgba(17,17,17,0.8)" }}>
                      {item.price.toFixed(2)} €
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white mb-1">{item.name}</h3>
                    <p className="text-sm line-clamp-2 leading-snug mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>{item.description}</p>
                    <Link
                      href="/menu"
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-white transition-all"
                      style={{ background: "linear-gradient(135deg, #F5A623, #E8651A)" }}
                    >
                      Commander
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTRE HISTOIRE ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: "#FFF8F0" }} aria-labelledby="histoire-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left" className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-56 rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop" alt="Intérieur du restaurant" fill className="object-cover" sizes="200px" />
                  </div>
                  <div className="h-36 rounded-2xl flex items-center justify-center p-6 text-white text-center" style={{ background: "linear-gradient(135deg, #2D9B5C, #4BAE72)" }}>
                    <div>
                      <div className="text-3xl font-black">3+</div>
                      <div className="text-sm font-medium opacity-90">ans de passion</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-36 rounded-2xl flex items-center justify-center p-6 text-white text-center" style={{ background: "linear-gradient(135deg, #F5A623, #E8651A)" }}>
                    <div>
                      <div className="text-3xl font-black" aria-hidden="true">🫓</div>
                      <div className="text-sm font-medium mt-1 opacity-90">Bokits maison</div>
                    </div>
                  </div>
                  <div className="relative h-56 rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=300&fit=crop" alt="Cuisine du restaurant" fill className="object-cover" sizes="200px" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-0 px-5 py-3 rounded-2xl text-white shadow-xl" style={{ background: "#1C1C1E" }}>
                <div className="flex items-center gap-2">
                  <div className="flex" aria-label="Note 5 étoiles">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} style={{ color: "#F5A623", fill: "#F5A623" }} aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-sm font-bold">5/5</span>
                </div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>+200 avis clients</div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-6" style={{ background: "rgba(245,166,35,0.15)", color: "#E8651A" }}>Notre histoire</span>
              <h2 id="histoire-heading" className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: "#1C1C1E" }}>
                De la Guadeloupe au{" "}
                <span style={{ background: "linear-gradient(135deg,#F5A623,#E8651A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Cameroun,
                </span>{" "}
                à votre assiette.
              </h2>
              <div className="space-y-4 leading-relaxed" style={{ color: "#6B7280" }}>
                <p>Tout a commencé par une simple dégustation chez Rodrigue : un bokit complet, généreux, croustillant. Ce moment a suffi à tout déclencher.</p>
                <p>Rodrigue et Adolente ont d&apos;abord sillonné les routes de Plaisir avec leur food truck pendant deux ans, affinant leurs recettes. Puis ils ont ouvert leur restaurant à Coignières — leur maison.</p>
                <p className="font-semibold" style={{ color: "#1C1C1E" }}>Chaque plat raconte une histoire : celle d&apos;une rencontre entre deux cultures, deux continents, deux familles unies par la passion de la cuisine généreuse.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/a-propos" className="btn-primary">
                  Notre histoire complète <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a href="tel:+33186045451" className="btn-dark">
                  <Phone size={16} aria-hidden="true" /> Nous appeler
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── VALEURS ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#F5EDE0" }} aria-label="Nos valeurs">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: `${val.color}20` }}>
                    <val.icon size={26} style={{ color: val.color }} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold mb-1 text-sm md:text-base" style={{ color: "#1C1C1E" }}>{val.title}</h3>
                  <p className="text-xs md:text-sm leading-snug" style={{ color: "#9CA3AF" }}>{val.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8" style={{ background: "#FFF8F0" }} aria-labelledby="temoignages-heading">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4" style={{ background: "rgba(45,155,92,0.15)", color: "#2D9B5C" }}>Ce qu&apos;ils en disent</span>
            <h2 id="temoignages-heading" className="text-4xl md:text-5xl font-black" style={{ color: "#1C1C1E" }}>
              Nos clients{" "}
              <span style={{ background: "linear-gradient(135deg,#F5A623,#E8651A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>adorent</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100" aria-label={`Avis de ${t.name}`}>
                  <div className="flex mb-4" aria-label={`Note : ${t.rating} étoiles sur 5`}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} style={{ color: "#F5A623", fill: "#F5A623" }} aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "#6B7280" }}>&ldquo;{t.comment}&rdquo;</p>
                  </blockquote>
                  <footer className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0" style={{ background: "linear-gradient(135deg,#F5A623,#E8651A)" }} aria-hidden="true">{t.avatar}</div>
                    <div>
                      <div className="font-bold text-sm" style={{ color: "#1C1C1E" }}>{t.name}</div>
                      <div className="text-xs" style={{ color: "#9CA3AF" }}>{t.date}</div>
                    </div>
                  </footer>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOUS TROUVER ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8" style={{ background: "#1C1C1E" }} aria-labelledby="trouver-heading">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4" style={{ background: "rgba(245,166,35,0.15)", color: "#F5A623" }}>Venez nous voir</span>
            <h2 id="trouver-heading" className="text-4xl md:text-5xl font-black text-white">Nous trouver</h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-10">
            <AnimatedSection direction="left" className="space-y-4">
              {[
                { icon: MapPin, color: "#F5A623", title: "Adresse", content: <address className="not-italic text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>6 Rue René Laennec<br />78310 Coignières<br /><a href="https://maps.google.com/?q=6+Rue+René+Laennec+78310+Coignières" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-xs font-semibold" style={{ color: "#F5A623" }}>Voir sur Google Maps <ArrowRight size={12} /></a></address> },
                { icon: Clock, color: "#E8651A", title: "Horaires", content: <ul className="space-y-1.5">{restaurantInfo.hours.map((h) => (<li key={h.day} className="flex justify-between text-sm"><span style={{ color: h.open ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.3)" }}>{h.day}</span><span className="font-medium" style={{ color: h.open ? "white" : "rgba(255,255,255,0.3)" }}>{h.times}</span></li>))}</ul> },
                { icon: Phone, color: "#2D9B5C", title: "Téléphone", content: <a href="tel:+33186045451" className="text-sm font-medium hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>01 86 04 54 51</a> },
              ].map((card) => (
                <div key={card.title} className="flex items-start gap-4 rounded-2xl p-6 border" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${card.color}22` }}>
                    <card.icon size={22} style={{ color: card.color }} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold mb-2">{card.title}</h3>
                    {card.content}
                  </div>
                </div>
              ))}
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="rounded-2xl overflow-hidden" style={{ height: "100%", minHeight: "320px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.305!2d1.946!3d48.757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e68e5c0b7b1a1d%3A0x123456789!2s6%20Rue%20Ren%C3%A9%20Laennec%2C%2078310%20Coigni%C3%A8res!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "320px", display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte Google Maps — Just Bokit Food, 6 Rue René Laennec, 78310 Coignières"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #F5A623 0%, #E8651A 50%, #C0392B 100%)" }} aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <AnimatedSection>
            <div className="text-5xl mb-6" aria-hidden="true">🫓</div>
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-black mb-4">
              Prêt à voyager<br />avec vos papilles ?
            </h2>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              Commandez en ligne, récupérez à emporter ou faites-vous livrer.
              La cuisine afro-caribéenne n&apos;a jamais été aussi proche.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg bg-white hover:bg-brand-cream transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                style={{ color: "#E8651A" }}
              >
                Voir la carte complète <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <Link href="/traiteur" className="btn-secondary text-lg">
                Service traiteur
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
