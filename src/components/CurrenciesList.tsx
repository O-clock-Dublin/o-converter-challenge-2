// src/components/CurrenciesList.tsx
import type { ICurrency } from "../data/currencies";
import currencies from "../data/currencies";
import Currency from "./Currency";

/**
 * Propriétés du composant CurrenciesList.
 *
 * @remarks
 * Le composant a besoin de la devise sélectionnée pour savoir
 * laquelle marquer comme "active" et d'une fonction à appeler
 * lorsqu'une devise est cliquée.
 */
interface CurrenciesListProps {
  /** Devise actuellement sélectionnée. */
  currentCurrency: ICurrency;
  /** Fonction appelée lorsqu'une devise est sélectionnée. */
  onCurrencyClick: (currency: ICurrency) => void;
}

/**
 * Composant responsable de l'affichage de la liste des devises.
 *
 * @remarks
 * Ce composant délègue l'affichage de chaque devise au composant
 * `Currency`. Il se contente de boucler sur le tableau `currencies`
 * et de passer les bonnes props à chaque enfant.
 *
 * @param props - Propriétés nécessaires pour afficher la liste.
 * @returns Le JSX d'une liste de devises.
 */
export default function CurrenciesList({
  currentCurrency,
  onCurrencyClick,
}: CurrenciesListProps) {
  return (
    <ul className="currencies">
      {currencies.map((currency) => (
        <Currency
          key={currency.code}
          currency={currency}
          isSelected={currency.code === currentCurrency.code}
          onClick={() => onCurrencyClick(currency)}
        />
      ))}
    </ul>
  );
}
