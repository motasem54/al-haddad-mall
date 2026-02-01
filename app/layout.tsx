import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "الحداد مول | Al-Haddad Mall - Premium Supermarket",
  description: "متجر سوبرماركت فخم لجميع احتياجاتك اليومية | Premium supermarket for all your daily needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
