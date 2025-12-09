// src/components/Currency.tsx
import { useState } from "react";
import type { ICurrency } from "../data/currencies";

/**
 * Propriétés du composant Currency.
 *
 * @remarks
 * Ce composant a besoin d'une devise, d'une information de sélection
 * et d'une fonction appelée lorsque l'utilisateur clique sur la devise.
 */
interface CurrencyProps {
  /** Devise représentée par cet élément de liste. */
  currency: ICurrency;
  /** Indique si cette devise est actuellement sélectionnée. */
  isSelected: boolean;
  /** Fonction appelée lorsque l'utilisateur sélectionne cette devise. */
  onClick: () => void;
}

/**
 * Composant représentant une devise dans la liste.
 *
 * @remarks
 * Ce composant gère un état local `isRateDisplayed` permettant
 * d'afficher ou de cacher le taux de la devise via un bouton dédié.
 *
 * @param props - Propriétés nécessaires pour rendre la devise.
 * @returns Le JSX d'un élément de liste contenant une devise.
 */
export default function Currency({
  currency,
  isSelected,
  onClick,
}: CurrencyProps) {
  /**
   * Indique si le taux de la devise doit être affiché.
   *
   * @remarks
   * Initialisé à `false`, donc le taux est caché par défaut.
   */
  const [isRateDisplayed, setIsRateDisplayed] = useState(false);

  /**
   * Gère le clic sur le bouton d'affichage du taux.
   *
   * @remarks
   * Inverse la valeur de `isRateDisplayed` à chaque clic.
   */
  const handleToggleRateClick = () => {
    setIsRateDisplayed(!isRateDisplayed);
  };

  return (
    <li className={`currency ${isSelected ? "selected" : ""}`}>
      <button
        type="button"
        onClick={onClick}
        className="currency__button"
      >
        {currency.description}
      </button>

      <div style={{ marginBottom: "0.5rem" }}>
        <button type="button" onClick={handleToggleRateClick}>
          {isRateDisplayed ? "Cacher le taux" : "Afficher le taux"}
        </button>

        {isRateDisplayed && (
          <span style={{ marginLeft: "0.5rem" }}>
            {currency.rate.toFixed(2)}
          </span>
        )}
      </div>
    </li>
  );
}
