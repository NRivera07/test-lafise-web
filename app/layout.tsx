import { Open_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={openSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
