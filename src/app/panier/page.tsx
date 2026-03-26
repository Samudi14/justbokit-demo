"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Trash2, ShoppingBag, Clock, MapPin, ArrowRight, Check, ShoppingCart } from "@/components/Icons";
import AnimatedSection from "@/components/AnimatedSection";
import { useCart } from "@/contexts/CartContext";

const timeSlots = [
  "11:45", "12:00", "12:15", "12:30", "12:45",
  "13:00", "13:15", "13:30", "19:00", "19:15",
  "19:30", "19:45", "20:00", "20:15", "20:30",
];

type OrderMode = "emporter" | "livraison";
type Step = "cart" | "details" | "confirm";

export default function PanierPage() {
  const { items, itemCount, total, removeItem, updateQuantity, clearCart } = useCart();
  const [orderMode, setOrderMode] = useState<OrderMode>("emporter");
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [address, setAddress] = useState("");
  const [step, setStep] = useState<Step>("cart");
  const [orderDone, setOrderDone] = useState(false);

  const deliveryFee = orderMode === "livraison" ? 2.5 : 0;
  const finalTotal = total + deliveryFee;

  const handleOrder = () => {
    setOrderDone(true);
    clearCart();
  };

  if (orderDone) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#FFF8F0" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full rounded-3xl p-10 text-center shadow-xl"
          style={{ background: "white" }}
          role="alert"
          aria-live="polite"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "linear-gradient(135deg, #2D9B5C, #4BAE72)" }}
          >
            <Check size={40} className="text-white" aria-hidden="true" />
          </motion.div>
          <h1 className="text-3xl font-black mb-3" style={{ color: "#1C1C1E" }}>Commande confirmée !</h1>
          <p className="mb-2" style={{ color: "#6B7280" }}>
            Ceci est une commande <strong>démo</strong>. En production, vous recevriez une confirmation par SMS et email.
          </p>
          <div
            className="rounded-2xl px-6 py-4 my-6 text-sm font-medium"
            style={{ background: "rgba(245,166,35,0.1)", color: "#E8651A" }}
          >
            🫓 Votre commande est en préparation — merci de faire confiance à Just Bokit Food !
          </div>
          <Link href="/menu" className="btn-primary w-full justify-center">
            Commander à nouveau
          </Link>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0 && !orderDone) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#FFF8F0" }}>
        <div className="max-w-md w-full text-center">
          <AnimatedSection>
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(245,166,35,0.1)" }}
              aria-hidden="true"
            >
              <ShoppingCart size={48} style={{ color: "#F5A623" }} />
            </div>
            <h1 className="text-3xl font-black mb-3" style={{ color: "#1C1C1E" }}>Votre panier est vide</h1>
            <p className="mb-8" style={{ color: "#9CA3AF" }}>
              Ajoutez des plats depuis notre carte pour composer votre commande.
            </p>
            <Link href="/menu" className="btn-primary">
              Découvrir la carte <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8" style={{ background: "#FFF8F0" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-8">
          <h1 className="text-4xl font-black" style={{ color: "#1C1C1E" }}>
            Mon Panier
            <span className="ml-3 text-2xl font-normal" style={{ color: "#9CA3AF" }}>
              ({itemCount} article{itemCount !== 1 ? "s" : ""})
            </span>
          </h1>
        </AnimatedSection>

        {/* Step progress — UX: clear progress indicator */}
        <div className="mb-10" role="progressbar" aria-valuenow={step === "cart" ? 1 : step === "details" ? 2 : 3} aria-valuemin={1} aria-valuemax={3} aria-label="Étape de commande">
          <div className="flex items-center justify-center gap-0">
            {[
              { id: "cart", label: "Panier", num: 1 },
              { id: "details", label: "Détails", num: 2 },
              { id: "confirm", label: "Confirmation", num: 3 },
            ].map((s, i) => (
              <div key={s.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all"
                    style={{
                      background: step === s.id ? "linear-gradient(135deg,#F5A623,#E8651A)" : (["cart","details","confirm"].indexOf(step) > i ? "#2D9B5C" : "rgba(0,0,0,0.08)"),
                      color: step === s.id || ["cart","details","confirm"].indexOf(step) > i ? "white" : "#9CA3AF",
                    }}
                    aria-current={step === s.id ? "step" : undefined}
                  >
                    {["cart","details","confirm"].indexOf(step) > i ? <Check size={16} /> : s.num}
                  </div>
                  <span className="text-xs mt-1 font-semibold" style={{ color: step === s.id ? "#E8651A" : "#9CA3AF" }}>{s.label}</span>
                </div>
                {i < 2 && (
                  <div
                    className="w-16 sm:w-24 h-0.5 mx-1 mb-4 transition-all"
                    style={{ background: ["cart","details","confirm"].indexOf(step) > i ? "#2D9B5C" : "#E5E7EB" }}
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {/* ── ÉTAPE 1 : PANIER ────────────────────────────────────────── */}
              {step === "cart" && (
                <motion.div key="cart" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20, height: 0 }}
                        className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm border border-gray-100"
                      >
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-sm md:text-base" style={{ color: "#1C1C1E" }}>{item.name}</h3>
                          <p className="text-xs line-clamp-1 mt-0.5" style={{ color: "#9CA3AF" }}>{item.description}</p>
                          <div className="flex items-center justify-between mt-3">
                            {/* Quantity stepper */}
                            <div className="flex items-center rounded-xl overflow-hidden" style={{ background: "#FFF8F0" }}>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-9 h-9 flex items-center justify-center font-bold hover:bg-brand-orange/10 transition-colors focus-visible:outline-none focus-visible:ring-2"
                                style={{ color: "#E8651A" }}
                                aria-label={`Retirer un ${item.name}`}
                              >
                                <Minus size={14} aria-hidden="true" />
                              </button>
                              <span className="w-8 text-center font-black text-sm" style={{ color: "#1C1C1E" }} aria-live="polite">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-9 h-9 flex items-center justify-center font-bold hover:bg-brand-orange/10 transition-colors focus-visible:outline-none focus-visible:ring-2"
                                style={{ color: "#E8651A" }}
                                aria-label={`Ajouter un autre ${item.name}`}
                              >
                                <Plus size={14} aria-hidden="true" />
                              </button>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="font-black" style={{ color: "#E8651A" }}>{(item.price * item.quantity).toFixed(2)} €</span>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                                style={{ color: "#D1D5DB" }}
                                aria-label={`Supprimer ${item.name} du panier`}
                              >
                                <Trash2 size={15} aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-between">
                    <Link href="/menu" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "#9CA3AF" }}>
                      ← Continuer les achats
                    </Link>
                    <button
                      onClick={() => setStep("details")}
                      className="btn-primary"
                    >
                      Passer à la livraison <ArrowRight size={16} aria-hidden="true" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ── ÉTAPE 2 : DÉTAILS LIVRAISON ─────────────────────────────── */}
              {step === "details" && (
                <motion.div key="details" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                    <h2 className="text-xl font-black mb-6" style={{ color: "#1C1C1E" }}>Mode de récupération</h2>

                    {/* Toggle emporter/livraison — UX: clear toggle, descriptive */}
                    <div className="grid grid-cols-2 gap-4 mb-8" role="radiogroup" aria-label="Mode de récupération">
                      {([
                        { value: "emporter", emoji: "🏃", label: "À emporter", desc: "Récupérez au restaurant" },
                        { value: "livraison", emoji: "🚚", label: "Livraison", desc: "+2,50 € • Dans votre quartier" },
                      ] as const).map((mode) => (
                        <button
                          key={mode.value}
                          role="radio"
                          aria-checked={orderMode === mode.value}
                          onClick={() => setOrderMode(mode.value)}
                          className="rounded-2xl p-4 text-left border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                          style={{
                            borderColor: orderMode === mode.value ? "#E8651A" : "#E5E7EB",
                            background: orderMode === mode.value ? "rgba(232,101,26,0.05)" : "white",
                          }}
                        >
                          <div className="text-3xl mb-2" aria-hidden="true">{mode.emoji}</div>
                          <div className="font-bold text-sm" style={{ color: "#1C1C1E" }}>{mode.label}</div>
                          <div className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>{mode.desc}</div>
                          <div
                            className="mt-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"
                            style={{ borderColor: orderMode === mode.value ? "#E8651A" : "#D1D5DB" }}
                            aria-hidden="true"
                          >
                            {orderMode === mode.value && (
                              <div className="w-3 h-3 rounded-full" style={{ background: "#E8651A" }} />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Delivery address */}
                    <AnimatePresence>
                      {orderMode === "livraison" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mb-6 overflow-hidden"
                        >
                          <label htmlFor="delivery-address" className="block text-sm font-semibold mb-2" style={{ color: "#1C1C1E" }}>
                            Adresse de livraison <span aria-hidden="true" style={{ color: "#F87171" }}>*</span>
                          </label>
                          <div className="relative">
                            <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#9CA3AF" }} aria-hidden="true" />
                            <input
                              id="delivery-address"
                              type="text"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              placeholder="12 Rue de la Paix, 78310 Coignières"
                              className="w-full pl-11 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
                              style={{ border: "1.5px solid #E5E7EB", color: "#1C1C1E" }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Time slot */}
                    <h3 className="text-base font-bold mb-3" style={{ color: "#1C1C1E" }}>
                      <Clock size={16} className="inline mr-2" aria-hidden="true" />
                      Créneau horaire
                    </h3>
                    <div
                      className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-8"
                      role="radiogroup"
                      aria-label="Choisir un créneau horaire"
                    >
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          role="radio"
                          aria-checked={selectedSlot === slot}
                          onClick={() => setSelectedSlot(slot)}
                          className="py-2.5 rounded-xl text-sm font-bold transition-all border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange min-h-[44px]"
                          style={{
                            background: selectedSlot === slot ? "linear-gradient(135deg,#F5A623,#E8651A)" : "white",
                            color: selectedSlot === slot ? "white" : "#6B7280",
                            borderColor: selectedSlot === slot ? "transparent" : "#E5E7EB",
                            boxShadow: selectedSlot === slot ? "0 4px 12px rgba(232,101,26,0.3)" : "none",
                          }}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <button onClick={() => setStep("cart")} className="btn-dark px-6" style={{ flex: "0 0 auto" }}>
                        ← Retour
                      </button>
                      <button
                        onClick={() => setStep("confirm")}
                        disabled={!selectedSlot || (orderMode === "livraison" && !address)}
                        className="flex-1 btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Confirmer <ArrowRight size={16} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ── ÉTAPE 3 : RÉCAPITULATIF ─────────────────────────────────── */}
              {step === "confirm" && (
                <motion.div key="confirm" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                    <h2 className="text-xl font-black mb-6" style={{ color: "#1C1C1E" }}>Récapitulatif de commande</h2>

                    {/* Order items */}
                    <ul className="divide-y divide-gray-100 mb-6" aria-label="Articles commandés">
                      {items.map((item) => (
                        <li key={item.id} className="flex justify-between py-3">
                          <div>
                            <span className="font-semibold text-sm" style={{ color: "#1C1C1E" }}>{item.name}</span>
                            <span className="text-sm ml-2" style={{ color: "#9CA3AF" }}>× {item.quantity}</span>
                          </div>
                          <span className="font-bold text-sm" style={{ color: "#1C1C1E" }}>{(item.price * item.quantity).toFixed(2)} €</span>
                        </li>
                      ))}
                    </ul>

                    {/* Delivery info */}
                    <div className="rounded-xl p-4 mb-6" style={{ background: "#FFF8F0" }}>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-xl" aria-hidden="true">{orderMode === "emporter" ? "🏃" : "🚚"}</span>
                        <div>
                          <p className="font-bold" style={{ color: "#1C1C1E" }}>
                            {orderMode === "emporter" ? "À emporter" : "Livraison à domicile"}
                          </p>
                          {orderMode === "livraison" && address && (
                            <p className="text-xs" style={{ color: "#9CA3AF" }}>{address}</p>
                          )}
                          {selectedSlot && (
                            <p className="text-xs" style={{ color: "#9CA3AF" }}>Créneau : {selectedSlot}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button onClick={() => setStep("details")} className="btn-dark px-6" style={{ flex: "0 0 auto" }}>
                        ← Retour
                      </button>
                      <button
                        onClick={handleOrder}
                        className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-base text-white transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow min-h-[52px]"
                        style={{ background: "linear-gradient(135deg,#2D9B5C,#4BAE72)", boxShadow: "0 6px 20px rgba(45,155,92,0.4)" }}
                      >
                        <ShoppingBag size={20} aria-hidden="true" />
                        Confirmer ma commande — {finalTotal.toFixed(2)} €
                      </button>
                    </div>
                    <p className="text-center text-xs mt-3" style={{ color: "#9CA3AF" }}>
                      Paiement en démo — aucun débit réel
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order summary sidebar — sticky on desktop */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-black mb-5" style={{ color: "#1C1C1E" }}>Résumé</h2>
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span style={{ color: "#6B7280" }}>
                        {item.name} <span style={{ color: "#D1D5DB" }}>× {item.quantity}</span>
                      </span>
                      <span className="font-semibold" style={{ color: "#1C1C1E" }}>{(item.price * item.quantity).toFixed(2)} €</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <div className="flex justify-between text-sm" style={{ color: "#9CA3AF" }}>
                    <span>Sous-total</span>
                    <span>{total.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ color: "#9CA3AF" }}>
                    <span>Livraison</span>
                    <span>{deliveryFee > 0 ? `${deliveryFee.toFixed(2)} €` : "Gratuit"}</span>
                  </div>
                  <div className="flex justify-between text-lg font-black border-t border-gray-100 pt-3 mt-1">
                    <span style={{ color: "#1C1C1E" }}>Total</span>
                    <span style={{ color: "#E8651A" }}>{finalTotal.toFixed(2)} €</span>
                  </div>
                </div>

                {/* Delivery mode toggle mini */}
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#9CA3AF" }}>Mode</p>
                  <div className="flex gap-2">
                    {(["emporter", "livraison"] as OrderMode[]).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => { setOrderMode(mode); if (step !== "cart") setStep("details"); }}
                        className="flex-1 py-2 rounded-lg text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                        style={{
                          background: orderMode === mode ? "linear-gradient(135deg,#F5A623,#E8651A)" : "#FFF8F0",
                          color: orderMode === mode ? "white" : "#9CA3AF",
                        }}
                        aria-pressed={orderMode === mode}
                      >
                        {mode === "emporter" ? "🏃 Emporter" : "🚚 Livraison"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl p-4 text-center" style={{ background: "rgba(245,166,35,0.1)" }}>
                <p className="text-sm font-semibold" style={{ color: "#E8651A" }}>
                  🫓 Tout est cuisiné à la demande — temps de préparation : 15-20 min.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
