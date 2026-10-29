import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/shared/ToastProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "The Next Press",
  description: "Best news portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`h-full antialiased`}>
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
