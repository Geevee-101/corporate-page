import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Volcanic",
  description:
    "A fictional corporate page that serves as an exercise in using Next JS, Tailwind CSS, and some data fetching",
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
