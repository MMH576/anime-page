import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>AniFind</title>
        <meta name="description" content="Find Your Next Favorite Anime" />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <main>{children}</main>
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  About
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  Contact
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  Terms
                </a>
              </div>
              <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                © 2024 AniFind. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
