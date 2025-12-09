// src/App.tsx
import { useState } from "react";
import "./App.css";
import type { ICurrency } from "./data/currencies";
import Footer from "./components/Footer";
import currencies from "./data/currencies";
import Header from "./components/Header";
import CurrenciesList from "./components/CurrenciesList";

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
	  <Header />

      <CurrenciesList
        currentCurrency={currentCurrency}
        onCurrencyClick={handleCurrentCurrencyClick}
      />

      {/* Le Footer reçoit la devise courante via les props */}
      <Footer currentCurrency={currentCurrency} />
    </div>
  );
}
