"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Plus, Minus, Check, Leaf, Flame } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { menuItems, categories } from "@/data/menu";
import { useCart } from "@/contexts/CartContext";
import type { MenuItem } from "@/data/menu";

function MenuContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") ?? "all";
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());
  const { addItem, getItemQuantity, updateQuantity } = useCart();

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((m) => m.category === activeCategory);

  const handleAdd = useCallback(
    (item: MenuItem) => {
      addItem(item);
      setAddedIds((prev) => new Set(prev).add(item.id));
      setTimeout(() => {
        setAddedIds((prev) => {
          const next = new Set(prev);
          next.delete(item.id);
          return next;
        });
      }, 1500);
    },
    [addItem]
  );

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 md:py-32 px-4 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1C1C1E 0%, #2D2D30 100%)" }}
        aria-labelledby="menu-heading"
      >
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5A623' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} aria-hidden="true" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-5"
            style={{ background: "rgba(245,166,35,0.2)", color: "#F5A623" }}
          >
            🍽️ Cuisine afro-caribéenne
          </motion.span>
          <motion.h1
            id="menu-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mb-4"
          >
            La Carte
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Tous nos plats cuisinés maison avec des produits frais.
          </motion.p>
        </div>
      </section>

      {/* Category filters — sticky, accessible */}
      <div
        className="sticky top-16 md:top-20 z-30 border-b shadow-sm"
        style={{ background: "rgba(255,248,240,0.95)", backdropFilter: "blur(12px)", borderColor: "#F5EDE0" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            role="tablist"
            aria-label="Catégories du menu"
            className="flex gap-2 overflow-x-auto py-4 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                aria-controls={`panel-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                style={{
                  background: activeCategory === cat.id ? "linear-gradient(135deg, #F5A623, #E8651A)" : "white",
                  color: activeCategory === cat.id ? "white" : "#6B7280",
                  boxShadow: activeCategory === cat.id ? "0 4px 12px rgba(232,101,26,0.35)" : "0 1px 3px rgba(0,0,0,0.08)",
                  border: activeCategory === cat.id ? "none" : "1px solid #F5EDE0",
                }}
              >
                <span aria-hidden="true">{cat.emoji}</span>
                {cat.label}
                {activeCategory === cat.id && (
                  <span className="text-xs bg-white/30 px-1.5 py-0.5 rounded-full">
                    {menuItems.filter((m) => cat.id === "all" || m.category === cat.id).length}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Menu grid */}
      <div
        className="py-12 md:py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "#FFF8F0" }}
        id={`panel-${activeCategory}`}
        role="tabpanel"
        aria-label={`Plats de la catégorie ${categories.find((c) => c.id === activeCategory)?.label}`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Category header */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-black" style={{ color: "#1C1C1E" }}>
                {categories.find((c) => c.id === activeCategory)?.label ?? "Tous nos plats"}
                <span className="ml-2 text-sm font-normal" style={{ color: "#9CA3AF" }}>
                  ({filtered.length} {filtered.length === 1 ? "plat" : "plats"})
                </span>
              </h2>
              <p className="text-sm mt-1" style={{ color: "#9CA3AF" }}>
                {categories.find((c) => c.id === activeCategory)?.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Grid */}
          <motion.div
            key={activeCategory + "-grid"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((item, i) => (
              <MenuCard
                key={item.id}
                item={item}
                index={i}
                justAdded={addedIds.has(item.id)}
                quantity={getItemQuantity(item.id)}
                onAdd={() => handleAdd(item)}
                onIncrement={() => updateQuantity(item.id, getItemQuantity(item.id) + 1)}
                onDecrement={() => updateQuantity(item.id, getItemQuantity(item.id) - 1)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

interface MenuCardProps {
  item: MenuItem;
  index: number;
  justAdded: boolean;
  quantity: number;
  onAdd: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
}

function MenuCard({ item, index, justAdded, quantity, onAdd, onIncrement, onDecrement }: MenuCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
      aria-label={item.name}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden shrink-0">
        <Image
          src={item.image}
          alt={`Photo de ${item.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5" aria-label="Labels">
          {item.isPopular && (
            <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "#F5A623", color: "#111" }}>⭐ Populaire</span>
          )}
          {item.isVegetarian && (
            <span className="px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1" style={{ background: "#2D9B5C", color: "white" }}>
              <Leaf size={11} aria-hidden="true" /> Végé
            </span>
          )}
          {item.isHalal && (
            <span className="px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1" style={{ background: "#7C3AED", color: "white" }}>
              <Flame size={11} aria-hidden="true" /> Halal
            </span>
          )}
        </div>
        {/* Price */}
        <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full font-black text-sm text-white" style={{ background: "rgba(17,17,17,0.85)", backdropFilter: "blur(4px)" }}>
          {item.price.toFixed(2)} €
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold mb-1" style={{ color: "#1C1C1E" }}>{item.name}</h3>
        <p className="text-sm line-clamp-2 leading-snug flex-1 mb-4" style={{ color: "#9CA3AF" }}>{item.description}</p>

        {/* Add to cart — UX: large touch target, quantity stepper, visual feedback */}
        {quantity === 0 ? (
          <button
            onClick={onAdd}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange min-h-[44px]"
            style={{
              background: justAdded
                ? "linear-gradient(135deg, #2D9B5C, #4BAE72)"
                : "linear-gradient(135deg, #F5A623, #E8651A)",
              boxShadow: justAdded ? "0 4px 12px rgba(45,155,92,0.4)" : "0 4px 12px rgba(232,101,26,0.3)",
            }}
            aria-label={justAdded ? `${item.name} ajouté au panier` : `Ajouter ${item.name} au panier`}
          >
            <AnimatePresence mode="wait">
              {justAdded ? (
                <motion.span key="added" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
                  <Check size={16} aria-hidden="true" /> Ajouté !
                </motion.span>
              ) : (
                <motion.span key="add" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
                  <ShoppingCart size={16} aria-hidden="true" /> Ajouter
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        ) : (
          <div className="flex items-center justify-between rounded-xl overflow-hidden min-h-[44px]" style={{ background: "linear-gradient(135deg, #F5A623, #E8651A)" }}>
            <button
              onClick={onDecrement}
              className="flex items-center justify-center w-11 h-11 text-white font-bold text-lg hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label={`Retirer un ${item.name} du panier`}
            >
              <Minus size={16} aria-hidden="true" />
            </button>
            <span className="text-white font-black text-base" aria-live="polite" aria-atomic="true">
              {quantity}
            </span>
            <button
              onClick={onIncrement}
              className="flex items-center justify-center w-11 h-11 text-white font-bold text-lg hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label={`Ajouter un autre ${item.name} au panier`}
            >
              <Plus size={16} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function MenuPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center" style={{ background: "#FFF8F0" }}>
          <div className="text-center">
            <div className="text-4xl mb-4" aria-hidden="true">🍽️</div>
            <p style={{ color: "#9CA3AF" }}>Chargement de la carte...</p>
          </div>
        </div>
      }
    >
      <MenuContent />
    </Suspense>
  );
}
