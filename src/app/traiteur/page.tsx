"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send, Calendar, Users, MapPin, ChefHat, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const formules = [
  {
    title: "Livraison Simple",
    emoji: "🚚",
    ideal: "Repas d'entreprise",
    color: "#F5A623",
    features: [
      "Livraison directe sur votre lieu",
      "Bokits, agoulous, plats chauds",
      "Packaging soigné",
      "Minimum 10 personnes",
      "Devis sur mesure",
    ],
  },
  {
    title: "Buffet Traiteur",
    emoji: "🍽️",
    ideal: "Anniversaires, mariages",
    color: "#E8651A",
    featured: true,
    features: [
      "Service à volonté convivial",
      "Mise en place complète",
      "Présentation soignée",
      "Personnel de service inclus",
      "Ambiance authentique caribéenne",
    ],
  },
  {
    title: "Service Complet",
    emoji: "👨‍🍳",
    ideal: "Événements haut de gamme",
    color: "#2D9B5C",
    features: [
      "Chef sur place",
      "Personnel qualifié dédié",
      "Installation & nettoyage",
      "Menu personnalisé",
      "Animation culinaire possible",
    ],
  },
];

const occasions = [
  { emoji: "💍", title: "Mariages" },
  { emoji: "🎂", title: "Anniversaires" },
  { emoji: "👶", title: "Baptêmes" },
  { emoji: "🏢", title: "Repas d'entreprise" },
  { emoji: "🎉", title: "Fêtes de famille" },
  { emoji: "🎓", title: "Événements scolaires" },
];

export default function TraiteurPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    date: "",
    guests: "",
    location: "",
    formule: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 md:py-36 px-4 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1C1C1E 0%, #2D2D30 100%)" }}
        aria-labelledby="traiteur-heading"
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #F5A623 0%, transparent 50%), radial-gradient(circle at 70% 50%, #E8651A 0%, transparent 50%)" }} aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-6"
            style={{ background: "rgba(245,166,35,0.2)", color: "#F5A623" }}
          >
            🎉 Pour vos événements
          </motion.span>
          <motion.h1
            id="traiteur-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Service Traiteur
            <span className="block mt-2" style={{ background: "linear-gradient(135deg, #F5A623, #E8651A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Afro-Caribéen
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Mini bokits, agoulous, plats typiques des Antilles et d&apos;Afrique — cuisinés maison pour vos occasions spéciales, toute l&apos;année.
          </motion.p>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#FFF8F0" }} aria-labelledby="occasions-heading">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 id="occasions-heading" className="text-3xl font-black mb-2" style={{ color: "#1C1C1E" }}>Pour toutes vos occasions</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {occasions.map((o, i) => (
              <AnimatedSection key={o.title} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="text-4xl mb-3" aria-hidden="true">{o.emoji}</div>
                  <p className="text-sm font-bold" style={{ color: "#1C1C1E" }}>{o.title}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Formules */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#F5EDE0" }} aria-labelledby="formules-heading">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4" style={{ background: "rgba(245,166,35,0.15)", color: "#E8651A" }}>Nos formules</span>
            <h2 id="formules-heading" className="text-4xl font-black" style={{ color: "#1C1C1E" }}>Choisissez votre formule</h2>
            <p className="mt-3 max-w-xl mx-auto" style={{ color: "#9CA3AF" }}>
              Chaque formule est personnalisable selon votre budget, vos goûts et vos besoins spéciaux (végétarien, halal, sans gluten).
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {formules.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.12}>
                <div
                  className={`relative bg-white rounded-2xl p-8 flex flex-col h-full border-2 transition-all hover:-translate-y-1 hover:shadow-xl ${f.featured ? "shadow-xl" : "shadow-sm border-transparent"}`}
                  style={{ borderColor: f.featured ? f.color : "transparent" }}
                >
                  {f.featured && (
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-black text-white"
                      style={{ background: f.color }}
                    >
                      ⭐ Le plus demandé
                    </div>
                  )}
                  <div className="text-5xl mb-4" aria-hidden="true">{f.emoji}</div>
                  <span className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: f.color }}>
                    Idéal pour
                  </span>
                  <p className="text-sm font-semibold mb-2" style={{ color: "#6B7280" }}>{f.ideal}</p>
                  <h3 className="text-2xl font-black mb-6" style={{ color: "#1C1C1E" }}>{f.title}</h3>
                  <ul className="space-y-3 flex-1 mb-8">
                    {f.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${f.color}20` }}>
                          <Check size={12} style={{ color: f.color }} aria-hidden="true" />
                        </div>
                        <span className="text-sm" style={{ color: "#6B7280" }}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#devis"
                    className="w-full flex items-center justify-center py-3 rounded-xl font-bold text-sm transition-all focus-visible:outline-none focus-visible:ring-2"
                    style={{
                      background: f.featured ? `linear-gradient(135deg, ${f.color}, #C0392B)` : "transparent",
                      color: f.featured ? "white" : f.color,
                      border: `2px solid ${f.color}`,
                    }}
                  >
                    Demander un devis
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#FFF8F0" }} aria-labelledby="process-heading">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 id="process-heading" className="text-4xl font-black" style={{ color: "#1C1C1E" }}>Comment ça marche ?</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", icon: Send, title: "Contactez-nous", desc: "Remplissez le formulaire ou appelez directement. Décrivez votre événement et vos besoins.", color: "#F5A623" },
              { step: "02", icon: Calendar, title: "Devis en 24h", desc: "Nous vous revenons sous 24h avec une proposition personnalisée selon votre budget.", color: "#E8651A" },
              { step: "03", icon: ChefHat, title: "Le jour J", desc: "Notre équipe s'occupe de tout. Vous n'avez plus qu'à profiter et faire profiter vos invités.", color: "#2D9B5C" },
            ].map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.12}>
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-5" style={{ background: `${step.color}15` }}>
                    <step.icon size={32} style={{ color: step.color }} aria-hidden="true" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-xs font-black text-white flex items-center justify-center" style={{ background: step.color }}>{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#1C1C1E" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire devis */}
      <section id="devis" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1C1C1E" }} aria-labelledby="devis-heading">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4" style={{ background: "rgba(245,166,35,0.15)", color: "#F5A623" }}>Devis gratuit</span>
            <h2 id="devis-heading" className="text-4xl font-black text-white">Demander un devis</h2>
            <p className="mt-3" style={{ color: "rgba(255,255,255,0.6)" }}>Réponse garantie sous 24h ouvrées.</p>
          </AnimatedSection>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl p-12 text-center border"
              style={{ background: "rgba(45,155,92,0.1)", borderColor: "rgba(45,155,92,0.3)" }}
              role="alert"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(45,155,92,0.2)" }}>
                <Check size={36} style={{ color: "#2D9B5C" }} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Demande envoyée !</h3>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
                Merci {form.name}. Nous vous recontacterons sous 24h pour finaliser les détails de votre événement.
              </p>
            </motion.div>
          ) : (
            <AnimatedSection>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 md:p-10 space-y-6"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <fieldset className="contents">
                    <legend className="sr-only">Informations personnelles</legend>
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white/80">
                        Nom complet <span aria-hidden="true" className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Marie Dupont"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", focusRingColor: "#F5A623" } as React.CSSProperties}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white/80">
                        Email <span aria-hidden="true" className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="marie@exemple.com"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                      />
                    </div>
                  </fieldset>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-white/80">Téléphone</label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="06 00 00 00 00"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="event" className="block text-sm font-semibold mb-2 text-white/80">
                      Type d&apos;événement <span aria-hidden="true" className="text-red-400">*</span>
                    </label>
                    <select
                      id="event"
                      required
                      value={form.event}
                      onChange={(e) => setForm({ ...form, event: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-white focus:outline-none focus:ring-2 transition-all"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: form.event ? "white" : "rgba(255,255,255,0.3)" }}
                    >
                      <option value="" disabled>Sélectionner...</option>
                      {["Mariage", "Anniversaire", "Baptême", "Repas d'entreprise", "Fête de famille", "Autre"].map((o) => (
                        <option key={o} value={o} style={{ background: "#1C1C1E" }}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold mb-2 text-white/80">Date de l&apos;événement</label>
                    <input
                      id="date"
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-white focus:outline-none focus:ring-2 transition-all"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", colorScheme: "dark" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-semibold mb-2 text-white/80">
                      Nombre de convives <span aria-hidden="true" className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(255,255,255,0.4)" }} aria-hidden="true" />
                      <input
                        id="guests"
                        type="number"
                        min="10"
                        required
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        placeholder="50"
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-semibold mb-2 text-white/80">Lieu</label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(255,255,255,0.4)" }} aria-hidden="true" />
                      <input
                        id="location"
                        type="text"
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        placeholder="Versailles, 78000"
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="formule" className="block text-sm font-semibold mb-2 text-white/80">Formule souhaitée</label>
                  <div className="grid sm:grid-cols-3 gap-3" role="group" aria-label="Choix de la formule">
                    {formules.map((f) => (
                      <button
                        key={f.title}
                        type="button"
                        onClick={() => setForm({ ...form, formule: f.title })}
                        className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all border focus-visible:outline-none focus-visible:ring-2"
                        style={{
                          background: form.formule === f.title ? `${f.color}20` : "rgba(255,255,255,0.05)",
                          borderColor: form.formule === f.title ? f.color : "rgba(255,255,255,0.1)",
                          color: form.formule === f.title ? f.color : "rgba(255,255,255,0.7)",
                        }}
                        aria-pressed={form.formule === f.title}
                      >
                        <span aria-hidden="true">{f.emoji}</span> {f.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white/80">Message / précisions</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Contraintes alimentaires, demandes spéciales, ambiance souhaitée..."
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-lg text-white transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow min-h-[56px]"
                  style={{ background: "linear-gradient(135deg, #F5A623, #E8651A)", boxShadow: "0 6px 20px rgba(232,101,26,0.4)" }}
                >
                  <Send size={20} aria-hidden="true" />
                  Envoyer ma demande de devis
                </button>
                <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Réponse sous 24h • Devis gratuit et sans engagement
                </p>
              </form>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Témoignage traiteur */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#FFF8F0" }} aria-label="Témoignage traiteur">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="flex justify-center mb-4" aria-label="5 étoiles">
              {[...Array(5)].map((_, i) => <Star key={i} size={22} style={{ color: "#F5A623", fill: "#F5A623" }} aria-hidden="true" />)}
            </div>
            <blockquote>
              <p className="text-xl md:text-2xl font-semibold leading-relaxed mb-6" style={{ color: "#1C1C1E" }}>
                &ldquo;On a commandé le service traiteur pour l&apos;anniversaire de ma femme. Rodrigue et son équipe ont assuré ! Tout était frais, savoureux et copieux. Tous nos invités ont adoré.&rdquo;
              </p>
            </blockquote>
            <footer>
              <cite className="not-italic font-bold" style={{ color: "#E8651A" }}>Baptiste L. — Anniversaire, 60 personnes</cite>
            </footer>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
