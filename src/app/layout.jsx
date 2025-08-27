import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechCore Imports • Yüksek Teknoloji İthalat & Dağıtım",
  description: "Geleceğin teknolojilerini ithal eden, dağıtan ve danışmanlık sağlayan modern yüksek teknoloji firması.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}