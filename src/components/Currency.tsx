import { useState } from "react";
import { ICurrency } from "../data/currencies";

interface CurrencyProps {
  currency: ICurrency; //devise
  isSelected: boolean;  //boolene de confirmation de selection
  onSelect: (currency: ICurrency) => void; //callback pour prévenir l'app
}

export default function Currency({
  currency,
  isSelected,
  onSelect,
}: CurrencyProps) {
  const [isRateDisplayed, setIsRateDisplayed] = useState(false);

  function handleToggleRate() {
    setIsRateDisplayed(!isRateDisplayed);
  }

  return (
    <li className="currency">
      <button
        type="button"
        className={isSelected ? "currency__button selected" : "currency__button"}
        onClick={() => onSelect(currency)}
      >
        {currency.description}
      </button>

      <button type="button" onClick={handleToggleRate}>
        {isRateDisplayed ? "Cacher taux" : "Afficher taux"}
      </button>

      {isRateDisplayed && (
        <div>{currency.rate.toFixed(2)}</div>
      )}
    </li>
  );
}
