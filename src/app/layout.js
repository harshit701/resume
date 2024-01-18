import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harshit Dave | Software Engineer",
  description: "Harshit Dave Resume",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="text-center text-gray-500 text-xs">
          Harshit Dave | All rights reserved &copy; {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
