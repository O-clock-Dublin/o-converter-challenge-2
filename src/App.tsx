// src/App.tsx
import { useState } from "react";
import "./App.css";
import currencies, { ICurrency } from "./data/currencies";
import Footer from "./components/Footer";

/**
 * Composant principal de l'application de conversion.
 *
 * @remarks
 * Ce composant gère uniquement la devise sélectionnée via
 * l'état `currentCurrency`. L'état lié à l'arrondi est délégué
 * au composant `Footer` afin de limiter les re-rendus inutiles.
 *
 * @returns Le JSX racine de l'application.
 */
export default function App() {
  /**
   * Devise actuellement sélectionnée par l'utilisateur.
   *
   * @remarks
   * La valeur initiale est la première entrée du tableau `currencies`.
   */
  const [currentCurrency, setCurrentCurrency] = useState<ICurrency>(
    currencies[0]
  );

  /**
   * Met à jour la devise courante à partir d'une devise choisie.
   *
   * @param selectedCurrency - La devise choisie par l'utilisateur.
   */
  const handleCurrentCurrencyClick = (selectedCurrency: ICurrency) => {
    setCurrentCurrency(selectedCurrency);
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">Converter</h1>
        <div className="header__value">1 euro</div>
      </header>

      <ul className="currencies">
        {currencies.map((currency) => (
          <li
            className={
              currency.code === currentCurrency.code
                ? "currency selected"
                : "currency"
            }
            key={currency.code}
          >
            <button
              type="button"
              onClick={() => handleCurrentCurrencyClick(currency)}
              className="currency__button"
            >
              {currency.description}
            </button>
          </li>
        ))}
      </ul>

      {/* Le Footer reçoit la devise courante via les props */}
      <Footer currentCurrency={currentCurrency} />
    </div>
  );
}
