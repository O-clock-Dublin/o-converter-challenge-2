import { useState } from "react";
import { ICurrency } from "./data/currencies";

// On défini l'interface pour les props.

interface FooterProps {
    currentCurrency: ICurrency;
}

export default function Footer({ currentCurrency }: FooterProps) {
    const [isRounded, setIsRounded] = useState(false);

    // On déplace la fonction handleClick ici

    function handleClick() {
        setIsRounded(!isRounded);
    }

   return (
    // Copie du JSX avec les ajustements nécessaires
    <footer className="result">
      <div className="result__amount">
        {isRounded ? currentCurrency.rate.toFixed(2) : currentCurrency.rate}
      </div>
      <div className="result__currency">{currentCurrency.description}</div>
      <button onClick={handleClick} type="button" className="result__button">
        {isRounded ? "Désarondir" : "Arrondir"}
      </button>
    </footer>
  );
}