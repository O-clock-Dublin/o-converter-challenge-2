import { useState } from "react";
import { ICurrency } from "../data/currencies";

interface FooterProps {
  selectedCurrency: ICurrency;
}

export default function Footer({ selectedCurrency }: FooterProps) {
  const [isRounded, setIsRounded] = useState(false);

  function handleRoundClick() {
    setIsRounded(!isRounded);
  }

  const displayedRate = isRounded
    ? selectedCurrency.rate.toFixed(2)
    : selectedCurrency.rate;

  return (
    <footer className="result">
      <div className="result__amount">{displayedRate}</div>
      <div className="result__currency">{selectedCurrency.description}</div>

      <button type="button" onClick={handleRoundClick}>
        {isRounded ? "Afficher brut" : "Arrondir"}
      </button>
    </footer>
  );
}
