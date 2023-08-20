import "./globals.css";
import { Inter } from "next/font/google";




import AuthContextProvider from "@/lib/store/auth-context";
import NavBar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fav Recipes",
  description: "Created by Aaron A.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <AuthContextProvider>
            <NavBar />
            {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
