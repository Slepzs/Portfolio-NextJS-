import "./globals.css";
import { Inter, Cinzel_Decorative } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const cinzel = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tobias Heide",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
