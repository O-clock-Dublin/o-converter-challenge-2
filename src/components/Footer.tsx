// src/components/Footer.tsx
import { useState } from "react";
import type { ICurrency } from "../data/currencies";

/**
 * Propriétés du composant Footer.
 *
 * @remarks
 * Le Footer a besoin de connaître la devise actuellement sélectionnée
 * afin d'afficher le taux et la description correspondants.
 */
interface FooterProps {
  /** Devise actuellement sélectionnée dans l'application. */
  currentCurrency: ICurrency;
}

/**
 * Composant responsable de l'affichage du résultat de conversion.
 *
 * @remarks
 * Ce composant gère un état local `isRounded` qui contrôle
 * l'affichage du taux arrondi ou non. De cette manière, seul
 * le Footer est re-rendu lorsqu'on clique sur le bouton d'arrondi.
 *
 * @param props - Propriétés contenant la devise sélectionnée.
 * @returns Le JSX du pied de page de l'application.
 */
export default function Footer({ currentCurrency }: FooterProps) {
  /**
   * Indique si le taux doit être affiché avec un arrondi.
   *
   * @remarks
   * Initialisé à `false`, donc le taux n'est pas arrondi par défaut.
   */
  const [isRounded, setIsRounded] = useState(false);

  /**
   * Gère le clic sur le bouton d'arrondi.
   *
   * @remarks
   * Inverse la valeur de `isRounded` pour basculer entre
   * affichage arrondi et non arrondi.
   */
  const handleRoundClick = () => {
    setIsRounded((previousValue) => !previousValue);
  };

  /**
   * Taux affiché à l'utilisateur.
   *
   * @remarks
   * Si `isRounded` est vrai, on arrondit le taux à 2 décimales
   * à l'aide de `toFixed(2)`. Sinon, on affiche la valeur brute.
   */
  const displayedRate = isRounded
    ? currentCurrency.rate.toFixed(2)
    : currentCurrency.rate;

  return (
    <footer className="result">
      <div className="result__amount">{displayedRate}</div>
      <div className="result__currency">{currentCurrency.description}</div>
      <button
        onClick={handleRoundClick}
        type="button"
        className="result__button"
      >
        {isRounded ? "Désarondir" : "Arrondir"}
      </button>
    </footer>
  );
}
