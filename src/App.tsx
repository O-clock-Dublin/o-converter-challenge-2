import { useState } from 'react';
import './App.css';
import currencies from './data/currencies';
import Footer from './component/footer';
import Currency from './component/currency';

export default function App() {
	// useState on a : const [ ValeurActuelle, modificationDeValeurActuelle ] = useState(valeurDeDépart) ?
	const [currentCurrency, setCurrentCurrency] = useState(currencies[0])
	
	return (
		<div className="app">
			<header className="header">
				<h1 className="header__title">Converter</h1>
				<div className="header__value">1 euro</div>
			</header>

			<ul className="currencies">
				{currencies.map((currency) => {
					return (
      			<li className="currency" key={currency.code}>
							<Currency currency={currency} currentCurrency={currentCurrency} setCurrentCurrency={setCurrentCurrency}/>
						</li>
					)
				}
				)}
			</ul>
			<Footer 
				currency={currentCurrency}
			/>
		</div>
	);
}
