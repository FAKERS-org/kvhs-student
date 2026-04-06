import type { Metadata, Viewport } from "next";
import BottomNav from "@/components/BottomNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "KVHS Student | វិទ្យាល័យក្រវ៉ាញ",
  description: "Kravanh Hun Sen High School – Student Portal",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "KVHS",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="km" className="h-full">
      <body className="min-h-full bg-gray-50 text-gray-900 font-khmer antialiased">
        <main className="max-w-lg mx-auto pb-20 min-h-screen">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
