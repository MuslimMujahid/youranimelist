import { Inter } from "next/font/google";

import "./globals.css";
import HeaderSearchInput from "@/components/HeaderSearchInput";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "youranimelist",
  description: "Have your own anime list with youranimelist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-12 py-8 flex justify-between items-center sticky top-0 bg-black">
          <a className="font-bold" href="/home">
            YOURANIMELIST
          </a>
          <HeaderSearchInput />
        </div>
        <main className="py-8 px-12">{children}</main>
      </body>
    </html>
  );
}
