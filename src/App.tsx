import { useState } from 'react';
import './App.css';
import currencies, { ICurrency } from './data/currencies';
import Footer from './component/Footer';
import Currency from './component/Currency';

export default function App() {

	// On crée un state afin de manipuler la devise courante
	// on l'initialise avec la première devise du tableau importé
	// useState on a : const [ ValeurActuelle, modificationDeValeurActuelle ] = useState(valeurDeDépart) ?
	const [currentCurrency, setCurrentCurrency] = useState(currencies[0])
	

	// On crée une fonction pour selectionner la devise souhaitée
	// const handleCurrentCurrencyClick = (currency : ICurrency) => {
	// 	setCurrentCurrency(currency)
	// }
	// On défini une variable placeholder qui sera remplacée par le paramètre d'entrée à l'utilisation de la fonction, ici banane
	function handleCurrentCurrencyClick(banane : ICurrency) {
		setCurrentCurrency(banane)
	}





	return (
		<div className="app">
			<header className="header">
				<h1 className="header__title">Converter</h1>
				<div className="header__value">1 euro</div>
			</header>

			<ul className="currencies">

				{/* Je boucle sur chaque entrée de tableau grâce à la variable "currency" et je crée une li pour chaque currency */}
				{currencies.map((currency) =>
					<Currency
						key={currency.code}
						currency={currency}
						currentCurrency={currentCurrency}
						handleCurrentCurrencyClick={handleCurrentCurrencyClick}
					/>
				)}
			</ul>

			<Footer currentCurrency={currentCurrency} />
		</div>
	);
}
