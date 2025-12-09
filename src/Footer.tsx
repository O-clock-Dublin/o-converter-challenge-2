import { useState } from "react";

type Currency = {
  rate: number;
  description: string;
};

type FooterProps = {
  currentCurrency: Currency;
};

export default function Footer({ currentCurrency }: FooterProps) {
  const [isRounded, setIsRounded] = useState(false);

  const handleRoundClick = () => {
    setIsRounded(!isRounded);
  };

  return (
    <footer className="result">
      <div className="result__amount">
        {isRounded ? currentCurrency.rate.toFixed(2) : currentCurrency.rate}
      </div>

      <div className="result__currency">
        {currentCurrency.description}
      </div>

      <button onClick={handleRoundClick} type="button" className="result__button">
        {isRounded ? "Désarondir" : "Arrondir"}
      </button>
    </footer>
  );
}