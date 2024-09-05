import "./globals.css";
import * as React from "react";
import { inter } from "@/app/ui/fonts";
import MyNavbar from "@/app/components/myNavbar"
import { NextUIProvider } from '@nextui-org/react'

export const metadata = {
  title: "Fanny Torres",
  description: "Ratita de gym, bailarina en proceso. Soy buena ondita. 🌸 🌎 👑 🌅 🫀 🦋 🌟 💫 🧘 🪽 🏅",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <div className="bg-black w-screen h-screen flex flex-col">
            <MyNavbar></MyNavbar>
            <div className="grow">
              {children}
            </div>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
