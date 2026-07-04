import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getI18n } from "@/lib/i18n";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const { dict } = await getI18n();

  return {
    title: {
      template: "%s | Sarah Beach Interiors",
      default: dict.metadata.siteTitleDefault,
    },
    description: dict.metadata.siteDescription,
    openGraph: {
      type: "website",
      locale: dict.metadata.ogLocale,
      siteName: "Sarah Beach Interiors",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { locale, dict } = await getI18n();

  return (
    <html lang={locale} className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header locale={locale} nav={dict.nav} labels={dict.header} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
