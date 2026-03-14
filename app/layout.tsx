import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Raghuram Medicare | Multi-Specialty Healthcare, Ghaziabad",
  description:
    "Raghuram Medicare — a premier multi-specialty clinic in Patel Nagar, Ghaziabad. Expert care in Pulmonology, Gynaecology, Critical Care & more led by Dr. Mohan Bandhu (MD, FCCS) and Dr. Shubhra Gupta (MBBS, DGO, DMCH).",
  keywords: [
    "raghuram medicare ghaziabad",
    "pulmonology ghaziabad",
    "best doctor ghaziabad",
    "gynaecology ghaziabad",
    "infertility clinic ghaziabad",
  ],
  openGraph: {
    title: "Raghuram Medicare | Multi-Specialty Healthcare, Ghaziabad",
    description: "Expert, compassionate healthcare in the heart of Ghaziabad.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-[family-name:var(--font-inter)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
