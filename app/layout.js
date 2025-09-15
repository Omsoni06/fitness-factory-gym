import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fitness Factory Barapathher - Premium Gym & Personal Training",
  description:
    "Join Fitness Factory in Barapathher. Boys & Girls workout plans starting from ₹700. Personal training available. Transform your body today!",
  keywords:
    "gym barapathher, fitness factory, personal training, workout plans, boys girls fitness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
