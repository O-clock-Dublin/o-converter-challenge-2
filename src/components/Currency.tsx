import { useState } from 'react';
import { ICurrency } from '../data/currencies';


interface CurrencyProps {
  currency: ICurrency;
  isChosen: boolean;
  onCurrencyClick: (currency: ICurrency) => void;
}

export default function Currency({ currency, isChosen, onCurrencyClick }: CurrencyProps) {
  const [isRateDisplayed, setIsRateDisplayed] = useState(false);

  function toggleRateDisplay() {
    setIsRateDisplayed(!isRateDisplayed);
  }
  
  return (
    <li className="currency" key={currency.code}>
        < button
          type="button"
          onClick={() => onCurrencyClick(currency)}
          className={isChosen ? "currency__button selected" : "currency__button"}
        >
          {currency.description}
          {isRateDisplayed && (
            <span>({currency.rate.toFixed(2)})</span>
          )}
        </button>
        <button
          type="button"
          onClick={toggleRateDisplay}
          className="rateButton"
        >
          {isRateDisplayed ? "cacher" : "👀"}
        </button>
    </li>
  )
}
