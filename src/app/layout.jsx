import "./globals.css";
import { Poppins } from "next/font/google";
import NavSidebar from "@/components/sidebar/NavSidebar.jsx";
import NextAuthSessionProvider from "../providers/sessionProvider.jsx";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <NextAuthSessionProvider>
          <main className="flex h-screen bg-slate-200 p-2 text-gray-700 selection:bg-neutral-200 flex gap-2">
            {/* <NavSidebar /> */}
            <section className="h-full basis-full bg-neutral-50 rounded drop-shadow overflow-hidden">
              {children}
            </section>
          </main>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
