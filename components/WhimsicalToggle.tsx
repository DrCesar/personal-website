"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function WhimsicalToggle() {
  const [clickedCount, setClickedCount] = useState(0);
  const [activeMessage, setActiveMessage] = useState("Tap for a spark");

  const messages = [
    "Delight unlocked!",
    "Physics in motion!",
    "CSS whimsy engaged!",
    "Craft is in the details!",
    "Keep exploring!",
  ];

  const handleClick = () => {
    const next = clickedCount + 1;
    setClickedCount(next);
    setActiveMessage(messages[next % messages.length]);
  };

  return (
    <div className="flex items-center gap-3">
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92, rotate: (clickedCount % 2 === 0 ? 3 : -3) }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 transition-colors shadow-sm"
      >
        <Sparkles className="w-3.5 h-3.5 text-accent animate-spin-slow" />
        <span>{activeMessage}</span>
        {clickedCount > 0 && (
          <span className="w-4 h-4 rounded-full bg-accent text-background flex items-center justify-center text-[10px] font-bold">
            {clickedCount}
          </span>
        )}
      </motion.button>
    </div>
  );
}
