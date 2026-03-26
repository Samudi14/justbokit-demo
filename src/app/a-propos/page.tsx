import Image from "next/image";
import { Star, Heart, Leaf, Flame } from "@/components/Icons";
import AnimatedSection from "@/components/AnimatedSection";
import { restaurantInfo } from "@/data/menu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos — Just Bokit Food",
  description: "Découvrez l'histoire de Just Bokit Food, un restaurant né de la passion de Rodrigue et Adolente pour la cuisine créole et africaine à Coignières.",
};

const timeline = [
  { year: "2019", title: "L'idée naît", desc: "Rodrigue déguste un bokit chez lui et décide de partager la cuisine créole et africaine avec le plus grand nombre.", emoji: "💡" },
  { year: "2020", title: "Le Food Truck", desc: "Rodrigue et Adolente lancent leur food truck à Plaisir. Deux ans d'expérience, de recettes et de rencontres.", emoji: "🚚" },
  { year: "2022", title: "Le Restaurant", desc: "L'aventure prend une nouvelle dimension. Just Bokit Food ouvre ses portes au 6 Rue René Laennec à Coignières.", emoji: "🏠" },
  { year: "Aujourd'hui", title: "Une famille", desc: "Une équipe soudée de 4 passionnés, des centaines de clients fidèles et toujours la même exigence de qualité.", emoji: "❤️" },
];

const values = [
  { icon: Heart, title: "La passion avant tout", desc: "Chaque plat est cuisiné avec le même amour que si c'était pour notre famille.", color: "#E8651A" },
  { icon: Leaf, title: "Produits frais", desc: "Nous sélectionnons soigneusement nos ingrédients pour vous garantir fraîcheur et qualité.", color: "#2D9B5C" },
  { icon: Star, title: "Authenticité", desc: "Nos recettes respectent les traditions culinaires de Guadeloupe et du Cameroun.", color: "#F5A623" },
  { icon: Flame, title: "Générosité", desc: "Des portions copieuses et des prix honnêtes, parce que bien manger ne doit pas coûter cher.", color: "#7C3AED" },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 md:py-36 px-4 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1C1C1E 0%, #2D2D30 100%)" }}
        aria-labelledby="apropos-heading"
      >
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 100%, #F5A623 0%, transparent 60%)" }} aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-6" style={{ background: "rgba(245,166,35,0.2)", color: "#F5A623" }}>
            Notre histoire
          </span>
          <h1 id="apropos-heading" className="text-5xl md:text-6xl font-black text-white mb-6">
            Deux cultures,
            <span className="block mt-1" style={{ background: "linear-gradient(135deg, #F5A623, #E8651A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              une seule passion.
            </span>
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
            Just Bokit Food, c&apos;est l&apos;histoire de Rodrigue et Adolente, deux cuisiniers passionnés qui ont voulu partager les saveurs de leur enfance avec tout le monde.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8" style={{ background: "#FFF8F0" }} aria-labelledby="histoire-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden" style={{ height: "240px" }}>
                    <Image
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop"
                      alt="Salle du restaurant Just Bokit Food"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden" style={{ height: "180px" }}>
                    <Image
                      src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=300&fit=crop"
                      alt="Cuisine du restaurant"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-10">
                  <div className="h-44 rounded-2xl flex flex-col items-center justify-center p-6 text-white text-center" style={{ background: "linear-gradient(135deg, #F5A623, #E8651A)" }}>
                    <div className="text-4xl font-black">2019</div>
                    <div className="text-sm font-medium mt-1 opacity-90">Fondé avec passion</div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden" style={{ height: "240px" }}>
                    <Image
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop"
                      alt="Ambiance restaurant caribéen"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-6" style={{ background: "rgba(245,166,35,0.15)", color: "#E8651A" }}>
                Qui sommes-nous ?
              </span>
              <h2 id="histoire-heading" className="text-4xl font-black mb-6 leading-tight" style={{ color: "#1C1C1E" }}>
                De la Guadeloupe au<br />
                <span style={{ background: "linear-gradient(135deg,#F5A623,#E8651A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Cameroun,
                </span>{" "}via Coignières
              </h2>
              <div className="space-y-5 leading-relaxed" style={{ color: "#6B7280" }}>
                <p>
                  Tout a commencé par un repas simple : un bokit complet chez Rodrigue. Ce moment-là a planté une graine.
                  La graine d&apos;un rêve — partager la cuisine créole et africaine avec le plus grand nombre.
                </p>
                <p>
                  Avant d&apos;ouvrir leur restaurant, Rodrigue et Adolente ont rodé leur concept pendant deux ans avec un food truck à Plaisir.
                  Deux ans de grillades sous le soleil, de bokits croustillants à la sortie du four, d&apos;épices savamment dosées.
                </p>
                <p>
                  En 2022, ils franchissent le cap. Just Bokit Food s&apos;installe au 6 Rue René Laennec à Coignières,
                  accompagnés de Jean-Luc et Cynthia, deux complices de longue date.
                </p>
                <p className="font-semibold" style={{ color: "#1C1C1E" }}>
                  Aujourd&apos;hui, chaque plat raconte une histoire : celle d&apos;une rencontre entre deux cultures, deux familles,
                  deux continents réunis autour d&apos;une même table.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#F5EDE0" }} aria-labelledby="timeline-heading">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 id="timeline-heading" className="text-4xl font-black" style={{ color: "#1C1C1E" }}>Notre parcours</h2>
          </AnimatedSection>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2" style={{ background: "linear-gradient(to bottom, #F5A623, #E8651A, #2D9B5C, #7C3AED)" }} aria-hidden="true" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.1}>
                  <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0 z-10 shadow-lg" style={{ background: "#FFF8F0", border: "3px solid #F5A623" }} aria-hidden="true">
                      {item.emoji}
                    </div>
                    {/* Card */}
                    <div className={`ml-16 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16 md:ml-auto"}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <span className="text-sm font-black uppercase tracking-wider" style={{ color: "#E8651A" }}>{item.year}</span>
                        <h3 className="text-xl font-black mt-1 mb-2" style={{ color: "#1C1C1E" }}>{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#FFF8F0" }} aria-labelledby="equipe-heading">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4" style={{ background: "rgba(45,155,92,0.15)", color: "#2D9B5C" }}>La famille</span>
            <h2 id="equipe-heading" className="text-4xl font-black" style={{ color: "#1C1C1E" }}>Notre équipe</h2>
            <p className="mt-3 max-w-xl mx-auto" style={{ color: "#9CA3AF" }}>
              Quatre passionnés unis par le même objectif : vous faire vivre une expérience culinaire inoubliable.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {restaurantInfo.team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="text-center group">
                  <div
                    className="relative w-24 h-24 mx-auto rounded-2xl mb-4 flex items-center justify-center text-4xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    style={{ background: "linear-gradient(135deg, rgba(245,166,35,0.15), rgba(232,101,26,0.15))", border: "2px solid rgba(245,166,35,0.3)" }}
                    aria-hidden="true"
                  >
                    {member.emoji}
                  </div>
                  <h3 className="font-bold" style={{ color: "#1C1C1E" }}>{member.name}</h3>
                  <p className="text-sm mt-0.5" style={{ color: "#9CA3AF" }}>{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#1C1C1E" }} aria-labelledby="valeurs-heading">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 id="valeurs-heading" className="text-4xl font-black text-white">Nos valeurs</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 0.1}>
                <div className="rounded-2xl p-6 text-center border transition-all hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: `${val.color}20` }}>
                    <val.icon size={28} style={{ color: val.color }} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.6)" }}>{val.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
