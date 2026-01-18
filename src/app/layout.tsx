import "destyle.css";
import "../styles/globals.scss";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Darumadrop_One, Noto_Sans_JP } from "next/font/google";
import { MockProvider } from "./MockProvider";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

const darumadrop = Darumadrop_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-darumadrop",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Town LP Platform",
  description: "観光LPをデータ駆動で構築するNext.jsデモ",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} ${darumadrop.variable}`}>
        <MockProvider>{children}</MockProvider>
      </body>
    </html>
  );
}
