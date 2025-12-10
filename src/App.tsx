import { useState } from 'react';
import currencies, { ICurrency } from './data/currencies';
import Footer from './components/Footer';
import './App.css';
import Currency from './components/Currency';

export default function App() {

	// 	useState<ICurrency>(currencies[0]) : création d’un état local nommé currentCurrency initialisé avec la première devise du tableau (currencies[0]).
	// currentCurrency : valeur actuelle (devise sélectionnée).
	// setCurrentCurrency : fonction pour modifier cette valeur.
	//On précise <ICurrency> pour que TypeScript sache quel type contient l’état (meilleure autocomplete / sécurité).
	const [currentCurrency, setCurrentCurrency] = useState(currencies[0])

	//Fonction utilitaire appelée lors du clic sur une devise.
	//Elle prend en paramètre currency (objet de type ICurrency) et appelle setCurrentCurrency(currency) pour mettre à jour l’état.
	//Mettre cette logique dans une fonction rend le JSX plus lisible et séparé de la logique.
	function handleCurrentCurrencyClick(currency: ICurrency) {
    	setCurrentCurrency(currency);
	}

	return (
		<div className="app">
			<header className="header">
				<h1 className="header__title">Converter</h1>
				<div className="header__value">1 euro</div>
			</header>
			{/* Liste <ul> qui contiendra un <li> par devise. La classe correspond au CSS existant (.currencies). */}
			<ul className="currencies">
				{/* {currencies.map((currency) => (
					<li className="currency" key={currency.code}>
					<button
						type="button"
						onClick={() => handleCurrentCurrencyClick(currency)}
						className={currency === currentCurrency 
							? "currency__button selected" 
							: "currency__button"
						}
					>
						{currency.description}
					</button>
					</li> */}
					 {currencies.map((currency) => (
						<Currency
						key={currency.code}
						currency={currency}
						isSelected={currency === currentCurrency}
						onSelect={handleCurrentCurrencyClick}
					/>
				))}
				</ul>
			<Footer selectedCurrency={currentCurrency} />
		</div>
	);
}
