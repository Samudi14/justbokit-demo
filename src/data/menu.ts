export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  priceMax?: number;
  category: string;
  image: string;
  tags?: string[];
  isPopular?: boolean;
  isVegetarian?: boolean;
  isHalal?: boolean;
}

export interface Category {
  id: string;
  label: string;
  emoji: string;
  description: string;
}

export const categories: Category[] = [
  { id: "all", label: "Tout voir", emoji: "🍽️", description: "Toute notre carte" },
  { id: "bokits", label: "Bokits", emoji: "🫓", description: "Nos bokits maison frits à la demande" },
  { id: "agoulous", label: "Agoulous", emoji: "🌯", description: "Spécialités enroulées aux saveurs du monde" },
  { id: "grillades", label: "Grillades", emoji: "🔥", description: "Viandes et poissons grillés à la flamme" },
  { id: "salades", label: "Salades", emoji: "🥗", description: "Fraîcheur et générosité dans chaque bol" },
  { id: "entrees", label: "Entrées", emoji: "🫕", description: "Pour bien démarrer le repas" },
  { id: "accompagnements", label: "Accompagnements", emoji: "🍚", description: "Pour compléter votre assiette" },
  { id: "desserts", label: "Desserts", emoji: "🍧", description: "La touche sucrée des Antilles" },
  { id: "boissons", label: "Boissons", emoji: "🥤", description: "Soifs caribéennes et classiques" },
];

export const menuItems: MenuItem[] = [
  // ── BOKITS ────────────────────────────────────────────────────────────────
  {
    id: "bokit-poulet",
    name: "Bokit Poulet",
    description: "Notre pain frit croustillant garni de poulet mariné, salade, tomate, oignon, sauce maison.",
    price: 8.5,
    category: "bokits",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    tags: ["halal"],
    isPopular: true,
    isHalal: true,
  },
  {
    id: "bokit-agneau",
    name: "Bokit Agneau",
    description: "Pain frit moelleux garni d'agneau tendre aux épices caribéennes, crudités et sauce pimentée.",
    price: 9.5,
    category: "bokits",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop",
    tags: ["halal"],
    isPopular: true,
    isHalal: true,
  },
  {
    id: "bokit-morue",
    name: "Bokit Morue",
    description: "L'incontournable ! Morue créole assaisonnée, acras, salade fraîche et citron vert.",
    price: 8.5,
    category: "bokits",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop",
    isPopular: true,
  },
  {
    id: "bokit-thon",
    name: "Bokit Thon",
    description: "Thon fondant en sauce, salade, tomate, cornichons dans notre pain frit signature.",
    price: 8.0,
    category: "bokits",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&h=300&fit=crop",
  },
  {
    id: "bokit-saucisse",
    name: "Bokit Saucisse",
    description: "Saucisse grillée, moutarde douce, oignons caramélisés et sauce maison.",
    price: 7.0,
    category: "bokits",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop",
  },
  {
    id: "bokit-mixte",
    name: "Bokit Mixte",
    description: "Le meilleur des deux mondes : morue et poulet réunis dans un pain frit généreux.",
    price: 10.5,
    category: "bokits",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop",
    isPopular: true,
  },

  // ── AGOULOUS ──────────────────────────────────────────────────────────────
  {
    id: "agoulous-agneau",
    name: "Agoulous Agneau",
    description: "Grande galette enroulée garnie d'agneau mariné, riz, salade, tomate, sauce yaourt au citron.",
    price: 12.0,
    category: "agoulous",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop",
    isHalal: true,
    isPopular: true,
  },
  {
    id: "agoulous-boeuf",
    name: "Agoulous Bœuf",
    description: "Bœuf haché épicé, légumes croquants, sauce secrète, galette maison.",
    price: 12.0,
    category: "agoulous",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
    isHalal: true,
  },
  {
    id: "agoulous-poulet",
    name: "Agoulous Poulet",
    description: "Poulet grillé aux herbes, salade croquante, tomate, oignon rouge, sauce épicée.",
    price: 11.0,
    category: "agoulous",
    image: "https://images.unsplash.com/photo-1561758033-7e924f619b47?w=400&h=300&fit=crop",
    isHalal: true,
  },
  {
    id: "agoulous-thon",
    name: "Agoulous Thon",
    description: "Thon en sauce créole, avocat, salade fraîche, citron vert, galette moelleuse.",
    price: 11.0,
    category: "agoulous",
    image: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?w=400&h=300&fit=crop",
  },
  {
    id: "agoulous-jambon-fromage",
    name: "Agoulous Jambon-Fromage",
    description: "Jambon de qualité, fromage fondu, salade, tomate, sauce légère maison.",
    price: 9.5,
    category: "agoulous",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&h=300&fit=crop",
  },
  {
    id: "agoulous-vegetarien",
    name: "Agoulous Végétarien",
    description: "Légumes de saison grillés, fromage frais, avocat, sauce au citron vert.",
    price: 9.5,
    category: "agoulous",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    isVegetarian: true,
    tags: ["végétarien"],
  },

  // ── GRILLADES ─────────────────────────────────────────────────────────────
  {
    id: "grillades-brochette-boeuf",
    name: "Brochette de Bœuf",
    description: "Brochette de bœuf mariné aux épices africaines, grillée à la flamme. Servie avec sauce pimentée.",
    price: 10.0,
    category: "grillades",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    isHalal: true,
    isPopular: true,
  },
  {
    id: "grillades-brochette-poulet",
    name: "Brochette de Poulet",
    description: "Poulet tendre mariné au citron et herbes fraîches, grillé à la perfection.",
    price: 8.0,
    category: "grillades",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop",
    isHalal: true,
  },
  {
    id: "grillades-ailes-poulet",
    name: "Ailes de Poulet",
    description: "6 ailes marinées, grillées et nappées de notre sauce barbecue caribéen.",
    price: 5.0,
    category: "grillades",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop",
    isHalal: true,
    isPopular: true,
  },
  {
    id: "grillades-demi-poulet",
    name: "Demi-Poulet Grillé",
    description: "Demi-poulet mariné aux épices créoles, grillé entier. Un classique généreux.",
    price: 8.5,
    category: "grillades",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c1?w=400&h=300&fit=crop",
    isHalal: true,
  },
  {
    id: "grillades-cuisse-poulet",
    name: "Cuisse de Poulet",
    description: "Cuisse de poulet juteuse, marinée et grillée avec amour.",
    price: 3.5,
    category: "grillades",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop",
    isHalal: true,
  },

  // ── SALADES ───────────────────────────────────────────────────────────────
  {
    id: "salade-poulet",
    name: "Salade Poulet",
    description: "Mélange de jeunes pousses, poulet grillé, tomates cerises, concombre, sauce vinaigrette maison.",
    price: 9.5,
    category: "salades",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
    isPopular: true,
  },
  {
    id: "salade-boeuf",
    name: "Salade Bœuf",
    description: "Salade fraîche garnie de lamelles de bœuf grillé, oignon rouge, poivrons, sauce épicée.",
    price: 11.0,
    category: "salades",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
  },
  {
    id: "salade-oeuf",
    name: "Salade aux Œufs",
    description: "Salade composée avec œufs durs, tomates, crudités variées, vinaigrette citron.",
    price: 6.5,
    category: "salades",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    isVegetarian: true,
  },
  {
    id: "salade-simple",
    name: "Salade Simple",
    description: "Mélange de laitue, tomates, concombres, carottes râpées, vinaigrette maison.",
    price: 5.0,
    category: "salades",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop",
    isVegetarian: true,
  },

  // ── ENTRÉES ───────────────────────────────────────────────────────────────
  {
    id: "entree-acras-morue",
    name: "Acras de Morue",
    description: "Les célèbres beignets antillais à la morue, croustillants dehors, fondants dedans.",
    price: 5.0,
    category: "entrees",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
    isPopular: true,
  },
  {
    id: "entree-pastel",
    name: "Pastel",
    description: "Chausson frit croustillant farci d'un mélange savoureux de viande et légumes épicés.",
    price: 5.0,
    category: "entrees",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
  },
  {
    id: "entree-samoussa",
    name: "Samoussa",
    description: "Triangle croustillant aux légumes et viande haché épicée, sauce chili.",
    price: 5.0,
    category: "entrees",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
  },

  // ── ACCOMPAGNEMENTS ───────────────────────────────────────────────────────
  {
    id: "acc-attieke",
    name: "Attiéké",
    description: "Semoule de manioc fermentée, spécialité ivoirienne légèrement acidulée.",
    price: 5.0,
    category: "accompagnements",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
    isVegetarian: true,
  },
  {
    id: "acc-riz-blanc",
    name: "Riz Blanc",
    description: "Riz basmati parfumé, cuit à la perfection.",
    price: 4.0,
    category: "accompagnements",
    image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&h=300&fit=crop",
    isVegetarian: true,
  },
  {
    id: "acc-aloko",
    name: "Alloco (Banane plantain frite)",
    description: "Bananes plantain mûres frites dorées, sucrées-salées, un délice africain.",
    price: 4.0,
    category: "accompagnements",
    image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=400&h=300&fit=crop",
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: "acc-frites",
    name: "Frites Maison",
    description: "Frites de pomme de terre fraîche, croustillantes, légèrement salées.",
    price: 4.0,
    category: "accompagnements",
    image: "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=400&h=300&fit=crop",
    isVegetarian: true,
  },
  {
    id: "acc-patate-douce",
    name: "Patate Douce Frite",
    description: "Patate douce frite légèrement caramélisée, une alternative saine et savoureuse.",
    price: 5.0,
    category: "accompagnements",
    image: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=400&h=300&fit=crop",
    isVegetarian: true,
  },
  {
    id: "acc-foutou",
    name: "Foutou",
    description: "Purée de banane plantain ou d'igname, spécialité ivoirienne, texture veloutée.",
    price: 5.0,
    category: "accompagnements",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    isVegetarian: true,
  },
  {
    id: "acc-chickwangue",
    name: "Chickwangue",
    description: "Pâte de manioc fermentée et compressée, accompagnement traditionnel d'Afrique centrale.",
    price: 5.0,
    category: "accompagnements",
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&h=300&fit=crop",
    isVegetarian: true,
  },

  // ── DESSERTS ──────────────────────────────────────────────────────────────
  {
    id: "dessert-sorbet-mangue",
    name: "Sorbet Mangue",
    description: "Sorbet artisanal à la mangue des Antilles, frais et parfumé.",
    price: 3.5,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop",
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: "dessert-sorbet-goyave",
    name: "Sorbet Goyave",
    description: "Sorbet onctueux à la goyave, le goût exotique des îles en une bouchée.",
    price: 3.5,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop",
    isVegetarian: true,
  },
  {
    id: "dessert-floup-chocolat",
    name: "Floup Chocolat",
    description: "Petite bouchée sucrée au chocolat, spécialité de la maison.",
    price: 2.0,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&h=300&fit=crop",
    isVegetarian: true,
  },
  {
    id: "dessert-floup-vanille",
    name: "Floup Vanille",
    description: "Délicate bouchée à la vanille des îles, fondante et parfumée.",
    price: 2.0,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    isVegetarian: true,
  },

  // ── BOISSONS ──────────────────────────────────────────────────────────────
  {
    id: "boisson-vaval",
    name: "Vaval (boisson antillaise)",
    description: "La boisson pétillante des Antilles, aux saveurs tropicales authentiques.",
    price: 2.5,
    category: "boissons",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
    isPopular: true,
  },
  {
    id: "boisson-vita-malt",
    name: "Vita Malt",
    description: "Boisson maltée non alcoolisée, riche et énergisante, goût caramel.",
    price: 2.5,
    category: "boissons",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    id: "boisson-mont-pele",
    name: "Mont Pelé",
    description: "Eau minérale martiniquaise, pure et fraîche.",
    price: 1.5,
    category: "boissons",
    image: "https://images.unsplash.com/photo-1559839914-17aae19cec71?w=400&h=300&fit=crop",
    isVegetarian: true,
  },
  {
    id: "boisson-coca",
    name: "Coca-Cola",
    description: "Le classique, servi bien frais.",
    price: 2.0,
    category: "boissons",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop",
    isVegetarian: true,
  },
  {
    id: "boisson-fanta",
    name: "Fanta Orange",
    description: "Pétillant et fruité, l'accord parfait avec nos grillades.",
    price: 2.0,
    category: "boissons",
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=300&fit=crop",
    isVegetarian: true,
  },
  {
    id: "boisson-jus-maison",
    name: "Jus Maison",
    description: "Jus de fruit frais du jour (mangue, goyave, fruit de la passion – selon arrivage).",
    price: 4.0,
    category: "boissons",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop",
    isVegetarian: true,
    isPopular: true,
  },
];

export const restaurantInfo = {
  name: "Just Bokit Food",
  tagline: "Les saveurs afro-caribéennes, proches de chez vous",
  description:
    "Né d'une passion partagée pour la cuisine créole et africaine, Just Bokit Food vous invite à un voyage gustatif entre la Guadeloupe et le Cameroun. Chaque plat raconte une histoire : celle d'une rencontre entre deux cultures.",
  address: "6 Rue René Laennec, 78310 Coignières",
  phone: "01 86 04 54 51",
  phoneFormatted: "+33 1 86 04 54 51",
  email: "contact@justbokitfood.com",
  hours: [
    { day: "Lundi", open: false, times: "Fermé" },
    { day: "Mardi", open: true, times: "11h30 – 22h30" },
    { day: "Mercredi", open: true, times: "11h30 – 22h30" },
    { day: "Jeudi", open: true, times: "11h30 – 22h30" },
    { day: "Vendredi", open: true, times: "11h30 – 22h30" },
    { day: "Samedi", open: true, times: "18h30 – 22h30" },
    { day: "Dimanche", open: true, times: "12h00 – 20h00" },
  ],
  socials: {
    instagram: "https://www.instagram.com/justbokitfood",
    facebook: "https://www.facebook.com/justbokitfood",
  },
  team: [
    { name: "Rodrigue", role: "Chef & Co-fondateur", emoji: "👨‍🍳" },
    { name: "Adolente", role: "Cheffe & Co-fondatrice", emoji: "👩‍🍳" },
    { name: "Jean-Luc", role: "Cuisine & Service", emoji: "🧑‍🍳" },
    { name: "Cynthia", role: "Service & Accueil", emoji: "👩‍💼" },
  ],
};

export const testimonials = [
  {
    name: "Marie-Claire D.",
    avatar: "MC",
    rating: 5,
    comment:
      "Les bokits sont absolument divins ! On se croirait aux Antilles. La morue est parfaitement assaisonnée et le pain frit est croustillant à souhait. J'y retourne chaque semaine !",
    date: "il y a 2 semaines",
  },
  {
    name: "Théodore K.",
    avatar: "TK",
    rating: 5,
    comment:
      "Meilleur restaurant caribéen de la région ! L'attiéké et les brochettes de bœuf sont un vrai régal. L'ambiance est chaleureuse et le service aux petits soins.",
    date: "il y a 1 mois",
  },
  {
    name: "Fatou N.",
    avatar: "FN",
    rating: 5,
    comment:
      "J'ai découvert ce restaurant grâce à une amie et je ne suis plus depuis ! L'agoulous agneau est une tuerie. Les portions sont généreuses et les prix très raisonnables.",
    date: "il y a 3 semaines",
  },
  {
    name: "Baptiste L.",
    avatar: "BL",
    rating: 5,
    comment:
      "On a commandé le service traiteur pour l'anniversaire de ma femme. Rodrigue et son équipe ont assuré ! Tout était frais, savoureux et copieux. Tous nos invités ont adoré.",
    date: "il y a 1 mois",
  },
];
