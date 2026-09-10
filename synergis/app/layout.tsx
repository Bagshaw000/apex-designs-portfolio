import type { Metadata } from "next";
import { Geist, Geist_Mono ,Inter, Bitcount_Grid_Single_Ink, Outfit} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bitcount = Bitcount_Grid_Single_Ink({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
  variable: '--font-bitcount',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap', // 'swap' ensures that the fallback font is used until Outfit loads
  variable: '--font-outfit', // Optional: for use with CSS variables (e.g., Tailwind CSS)
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synergis Design Solutions",
  description:
    "Synergis Design Solutions — a Design-as-a-Service partner for corporate branding, campaign design and design consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${bitcount.className} ${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
