import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loggy — Premium Shirts for Every Occasion",
  description:
    "Discover Loggy's curated collection of premium shirts. From breathable linen classics to rugged utility work shirts, find your perfect fit.",
  openGraph: {
    title: "Loggy — Premium Shirts for Every Occasion",
    description:
      "Discover Loggy's curated collection of premium shirts. From breathable linen classics to rugged utility work shirts, find your perfect fit.",
    url: "https://catalog-commerce.com",
    siteName: "Loggy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
