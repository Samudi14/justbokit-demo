import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Just Bokit Food | Cuisine Afro-Caribéenne à Coignières",
  description:
    "Découvrez Just Bokit Food, le restaurant de cuisine afro-caribéenne à Coignières. Bokits, grillades, salades et plats antillais cuisinés maison. Livraison et service traiteur disponibles.",
  keywords: "bokit, restaurant antillais, cuisine caribéenne, Coignières, traiteur, livraison",
  openGraph: {
    title: "Just Bokit Food | Cuisine Afro-Caribéenne",
    description:
      "Les saveurs authentiques de la Guadeloupe et du Cameroun à Coignières. Bokits, grillades, salades cuisinés maison.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full overflow-x-hidden`}>
      <body className="min-h-full flex flex-col antialiased overflow-x-hidden">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
