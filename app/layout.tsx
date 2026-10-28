
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lost & Found | Find What Matters",
  description:
    "A smarter campus lost and found platform. Report lost belongings, discover found items, and help reunite people with what matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
