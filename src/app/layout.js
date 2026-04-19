// import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '@/components/Navbar'
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Get Hyped",
  description: "Created by Naiem Al Foysal",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body suppressHydrationWarning>
        <Navbar />
        <main className="min-h-full flex flex-col">{children}</main>
      </body>
    </html>
  );
}







