import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Shill's Meme Investment Platform",
  description:
    "A meme trading dashboard where users can create and invest in meme-based digital assets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-[#b3b3b3]">{children}</div>
      </body>
    </html>
  );
}
