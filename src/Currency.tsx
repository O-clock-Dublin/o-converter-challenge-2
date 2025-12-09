import { useState } from "react";

type Currency = {
  code: string;
  description: string;
  rate: number;
};

type CurrencyProps = {
  currency: Currency;
  currentCurrency: Currency;
  onSelect: (currency: Currency) => void;
};

export default function Currency({
  currency,
  currentCurrency,
  onSelect,
}: CurrencyProps) {
  const [isRateDisplayed, setIsRateDisplayed] = useState(false);

  const handleToggleRate = () => {
    setIsRateDisplayed(!isRateDisplayed);
  };

  return (
    <li className="currency">
      <button type="button" onClick={() => onSelect(currency)} className={currency === currentCurrency ? "currency__button selected" : "currency__button"}>
        {currency.description}

        {isRateDisplayed && (
            <span className="currency__rate">
            {" (" + currency.rate.toFixed(2) + ")"}
            </span>
        )}

        <button type="button" onClick={handleToggleRate} className="">
            {isRateDisplayed ? <img src="src/data/cross.png" alt="Cross" style={ {width : "20%" }}/> : <img src="src/data/eyes.png" alt="Eyes" style={ {width : "20%" }}/>}   
        </button>
      </button>
    </li>
  );
}
