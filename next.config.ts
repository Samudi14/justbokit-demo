import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * transpilePackages — La solution universelle pour les packages ESM-only sur Vercel.
   *
   * Problème : Vercel build utilise webpack qui ne sait pas gérer les modules
   * ESM-only (pas de fichier CJS/require). Résultat : "Module not found" en prod
   * alors que ça marchait en local (Turbopack/esbuild gère l'ESM nativement).
   *
   * Solution : lister ici les packages ESM-only. Next.js va les transpiler en
   * CommonJS pendant le build → plus d'erreur Vercel.
   *
   * Exemples de packages souvent concernés :
   *   - lucide-react (>= 1.x)
   *   - framer-motion (si problème)
   *   - @radix-ui/*
   *   - react-intersection-observer
   *   - d3, chart.js wrappers...
   *
   * Usage :
   *   transpilePackages: ["lucide-react", "autre-package-esm"],
   */
  transpilePackages: [],

  /**
   * Images — autoriser les domaines externes (Unsplash utilisé pour les placeholders).
   * En prod, remplacer par les vraies photos du restaurant.
   */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
