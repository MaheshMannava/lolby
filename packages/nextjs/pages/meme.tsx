"use client";

import { useState } from "react";
import { Header } from "../components/meme/Header";
import { CreateMemeButton } from "../components/meme/CreateMemeButton";
import { MemeCard } from "../components/meme/MemeCard";
import { HowToShillDialog } from "../components/meme/HowToShillDialog";

const memes = [
  {
    symbol: "PINP",
    description:
      "The coin that makes you a true individual. This should be a max of 3 lines of text...",
    imageUrl: "/images/Image and frame.png",
    ticketCount: 8045,
    isTopPerformer: true,
  },
  {
    symbol: "CRAP",
    description: "This one's for the dookies out there.",
    imageUrl: "/images/crap.png",
    ticketCount: 324,
  },
  {
    symbol: "KERN",
    description:
      "The Opportunity you've all been waiting for. Invest at least 12 thumbs for good luck!",
    imageUrl: "/images/cornim11 1.png",
    ticketCount: 5,
  },
];

export default function MemePage() {
  const [showHowTo, setShowHowTo] = useState(true);

  return (
    <div className="min-h-screen py-8 px-4 bg-[#b3b3b3]">
      <Header />
      <CreateMemeButton />
      <div className="w-full max-w-4xl mx-auto">
        {memes.map((meme) => (
          <MemeCard key={meme.symbol} {...meme} />
        ))}
      </div>
      <HowToShillDialog open={showHowTo} onOpenChange={setShowHowTo} />
    </div>
  );
}
