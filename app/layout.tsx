import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google"; // Import Google Fonts
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold
});

export const metadata: Metadata = {
  title: "Aaghila Amal | Digital Marketing Strategist",
  description: "Portfolio of Aaghila Amal, a Digital Marketing Strategist specializing in SEO, Social Media, and Content Creation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
