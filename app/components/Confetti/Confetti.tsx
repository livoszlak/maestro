"use client";

import { useEffect } from "react";
import JSConfetti from "js-confetti";

const Confetti = (): null => {
  useEffect(() => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ["🍾", "🍸", "🍹", "🥂", "🍻", "🧉", "🧊"],
      emojiSize: 75,
      confettiNumber: 20,
    });
  }, []);

  return null;
};

export default Confetti;
