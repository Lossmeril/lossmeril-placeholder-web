import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michal Špitálský",
  description: "Web už se připravuje",
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
