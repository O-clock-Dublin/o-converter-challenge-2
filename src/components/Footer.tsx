// src/components/Footer.tsx
import { useState } from "react";
import type { ICurrency } from "../data/currencies";

interface FooterProps {
  currentCurrency: ICurrency;
}

export default function Footer({ currentCurrency }: FooterProps) {
  const [isRounded, setIsRounded] = useState(false);

  const displayedRate = isRounded
    ? currentCurrency.rate.toFixed(2)         // rounded, as string
    : String(currentCurrency.rate);          // original value as string

  return (
    <footer className="result">
      <div className="result__amount">{displayedRate}</div>
      <div className="result__currency">
        {currentCurrency.description}
      </div>
      <button
        type="button"
        className="result__button"
        onClick={() => setIsRounded(!isRounded)}
      >
        {isRounded ? "Désarondir" : "Arrondir"}
      </button>
    </footer>
  );
}
