"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, Check } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import AnimatedSection from "@/components/AnimatedSection";
import { restaurantInfo } from "@/data/menu";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 md:py-32 px-4 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1C1C1E 0%, #2D2D30 100%)" }}
        aria-labelledby="contact-heading"
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, #F5A623 0%, transparent 50%)" }} aria-hidden="true" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-6" style={{ background: "rgba(245,166,35,0.2)", color: "#F5A623" }}>
            📬 On est là pour vous
          </span>
          <h1 id="contact-heading" className="text-5xl md:text-6xl font-black text-white mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
            Une question, une réservation, un événement à organiser ? On vous répond rapidement.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#FFF8F0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Info cards */}
            <AnimatedSection direction="left" className="space-y-5">
              <h2 className="text-2xl font-black mb-6" style={{ color: "#1C1C1E" }}>Nos coordonnées</h2>

              {/* Phone */}
              <a
                href="tel:+33186045451"
                className="flex items-start gap-4 rounded-2xl p-5 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(232,101,26,0.1)" }}>
                  <Phone size={22} style={{ color: "#E8651A" }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#9CA3AF" }}>Téléphone</p>
                  <p className="font-bold text-lg group-hover:text-brand-orange transition-colors" style={{ color: "#1C1C1E" }}>01 86 04 54 51</p>
                  <p className="text-sm mt-0.5" style={{ color: "#9CA3AF" }}>Appuyez pour appeler directement</p>
                </div>
              </a>

              {/* Address */}
              <a
                href="https://maps.google.com/?q=6+Rue+René+Laennec+78310+Coignières"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl p-5 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(245,166,35,0.1)" }}>
                  <MapPin size={22} style={{ color: "#F5A623" }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#9CA3AF" }}>Adresse</p>
                  <address className="not-italic font-bold" style={{ color: "#1C1C1E" }}>
                    6 Rue René Laennec<br />78310 Coignières
                  </address>
                  <p className="text-sm mt-1" style={{ color: "#E8651A" }}>Ouvrir dans Google Maps →</p>
                </div>
              </a>

              {/* Hours */}
              <div className="rounded-2xl p-5 border border-gray-100 bg-white shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(45,155,92,0.1)" }}>
                    <Clock size={22} style={{ color: "#2D9B5C" }} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#9CA3AF" }}>Horaires d&apos;ouverture</p>
                    <ul className="space-y-2">
                      {restaurantInfo.hours.map((h) => (
                        <li key={h.day} className="flex justify-between text-sm">
                          <span style={{ color: h.open ? "#1C1C1E" : "#D1D5DB" }}>{h.day}</span>
                          <span className={`font-semibold ${h.open ? "" : ""}`} style={{ color: h.open ? "#1C1C1E" : "#D1D5DB" }}>
                            {h.times}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="rounded-2xl p-5 border border-gray-100 bg-white shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#9CA3AF" }}>Suivez-nous</p>
                <div className="flex gap-4">
                  <a
                    href={restaurantInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 flex-1 rounded-xl px-4 py-3 font-semibold text-sm transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                    style={{ background: "linear-gradient(135deg, #E1306C, #833AB4)", color: "white" }}
                    aria-label="Suivre Just Bokit Food sur Instagram"
                  >
                    <InstagramIcon size={18} /> Instagram
                  </a>
                  <a
                    href={restaurantInfo.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 flex-1 rounded-xl px-4 py-3 font-semibold text-sm transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                    style={{ background: "#1877F2", color: "white" }}
                    aria-label="Suivre Just Bokit Food sur Facebook"
                  >
                    <FacebookIcon size={18} /> Facebook
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right">
              <div className="rounded-2xl p-8 md:p-10" style={{ background: "#1C1C1E" }}>
                <h2 className="text-2xl font-black text-white mb-8">Envoyer un message</h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                    role="alert"
                  >
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(45,155,92,0.2)" }}>
                      <Check size={36} style={{ color: "#2D9B5C" }} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-2">Message envoyé !</h3>
                    <p style={{ color: "rgba(255,255,255,0.6)" }}>On vous répond dans les plus brefs délais.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-semibold mb-2" style={{ color: "rgba(255,255,255,0.8)" }}>
                          Nom <span aria-hidden="true" style={{ color: "#F87171" }}>*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Jean Dupont"
                          className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all"
                          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-semibold mb-2" style={{ color: "rgba(255,255,255,0.8)" }}>
                          Email <span aria-hidden="true" style={{ color: "#F87171" }}>*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="jean@exemple.com"
                          className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all"
                          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-semibold mb-2" style={{ color: "rgba(255,255,255,0.8)" }}>
                        Sujet
                      </label>
                      <select
                        id="contact-subject"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-white focus:outline-none focus:ring-2 transition-all"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: form.subject ? "white" : "rgba(255,255,255,0.3)" }}
                      >
                        <option value="" style={{ background: "#1C1C1E" }}>Sélectionner un sujet...</option>
                        {["Réservation", "Service traiteur", "Commande en ligne", "Retour / Avis", "Autre"].map((s) => (
                          <option key={s} value={s} style={{ background: "#1C1C1E" }}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-semibold mb-2" style={{ color: "rgba(255,255,255,0.8)" }}>
                        Message <span aria-hidden="true" style={{ color: "#F87171" }}>*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Votre message..."
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 transition-all resize-none"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-base text-white transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow disabled:opacity-70 disabled:cursor-not-allowed min-h-[52px]"
                      style={{ background: "linear-gradient(135deg, #F5A623, #E8651A)", boxShadow: "0 6px 20px rgba(232,101,26,0.35)" }}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Envoi en cours...
                        </span>
                      ) : (
                        <>
                          <Send size={18} aria-hidden="true" /> Envoyer le message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Google Maps */}
          <AnimatedSection className="mt-12">
            <div className="rounded-2xl overflow-hidden" style={{ height: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.305!2d1.946!3d48.757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e68e5c0b7b1a1d%3A0x123456789!2s6%20Rue%20Ren%C3%A9%20Laennec%2C%2078310%20Coigni%C3%A8res!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Google Maps — Just Bokit Food à Coignières"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
