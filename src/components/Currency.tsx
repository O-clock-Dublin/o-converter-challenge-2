// src/components/Currency.tsx
import { useState } from "react";
import type { ICurrency } from "../data/currencies";

interface CurrencyProps {
  currency: ICurrency;
  isSelected: boolean;
  onClick: () => void;
}

export default function Currency({
  currency,
  isSelected,
  onClick,
}: CurrencyProps) {
  // Local state: controls if the rate is visible or not
  const [isRateDisplayed, setIsRateDisplayed] = useState(false);

  return (
    <li className={`currency ${isSelected ? "selected" : ""}`}>
      {/* Button to select the currency */}
      <button
        type="button"
        className="currency__button"
        onClick={onClick}
      >
        {currency.description}
      </button>

      <div style={{ marginBottom: "0.5rem" }}>
        {/* Button to toggle the rate display */}
        <button
          type="button"
          onClick={() => setIsRateDisplayed(!isRateDisplayed)}
        >
          {isRateDisplayed ? "Cacher le taux" : "Afficher le taux"}
        </button>

        {/* Only show the rate when isRateDisplayed is true */}
        {isRateDisplayed && (
          <span style={{ marginLeft: "0.5rem" }}>
            {currency.rate.toFixed(2)}
          </span>
        )}
      </div>
    </li>
  );
}
