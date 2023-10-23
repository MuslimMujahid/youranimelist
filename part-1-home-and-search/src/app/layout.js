import { Inter } from "next/font/google";

import "./globals.css";
import Headbar from "@/components/Headbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "youranimelist",
  description: "Have your own anime list with youranimelist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Headbar />
        <main className="py-8 px-12">{children}</main>
      </body>
    </html>
  );
}
