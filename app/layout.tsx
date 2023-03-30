import "./globals.css";
export const metadata = {
  title: "Rock Paper Scissors - Cesar Moros - Cmoros",
  description: "A rock paper scissors game made with react by Cesar Moros",
};
import { Inter } from "next/font/google";
import { Providers } from "@/redux/Provider";
import clsx from "clsx";
import MainFooter from "@/components/MainFooter";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>
        <Providers>
          <main className="flex h-full min-h-screen flex-col items-center justify-center gap-5 pt-5 pb-10 md:gap-10">
            {children}
          </main>
        </Providers>
        <MainFooter />
      </body>
    </html>
  );
}
