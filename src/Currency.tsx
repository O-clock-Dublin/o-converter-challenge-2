import { useState } from 'react';
import { ICurrency } from './data/currencies';

// Interface pour définir les props que Currency va recevoir
interface CurrencyProps {
  currency: ICurrency;           // La devise à afficher
  isSelected: boolean;           // Si cette devise est sélectionnée
  onCurrencyClick: (currency: ICurrency) => void;  // Fonction callback pour le clic
}

export default function Currency({ currency, isSelected, onCurrencyClick }: CurrencyProps) {
  // State local pour afficher/cacher le taux
  const [isRateDisplayed, setIsRateDisplayed] = useState(false);

  // Fonction pour toggler l'affichage du taux
  function toggleRateDisplay() {
    setIsRateDisplayed(!isRateDisplayed);
  }

  return (
    <li className="currency">
      {/* Bouton principal de la devise (copié depuis App.tsx) */}
      <button 
        type="button" 
        onClick={() => onCurrencyClick(currency)} 
        className={isSelected ? "currency__button selected" : "currency__button"}
      >
        {currency.description}
      </button>
      
      {/* Affichage conditionnel du taux */}
      {isRateDisplayed && (
        <span className="currency__rate">
          Taux: {currency.rate.toFixed(2)}
        </span>
      )}
      
      {/* Bouton pour afficher/cacher le taux */}
      <button 
        type="button" 
        onClick={toggleRateDisplay}
        className="currency__toggle-button"
      >
        {isRateDisplayed ? "Cacher" : "Afficher"}
      </button>
    </li>
  );
}