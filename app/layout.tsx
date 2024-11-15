import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "flowz0 UI Lib",
  description: "Next.js / React UI component library by flowz0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
