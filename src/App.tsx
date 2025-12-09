import './App.css';
import Footer from './components/Footer';
import  Currency from './components/Currency';
import { useState } from 'react';
import currencies, { ICurrency } from './data/currencies';

export default function App() {
	const [currentCurrency, setCurrentCurrency] = useState(currencies[0])

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
				{currencies.map((currency) => (

					<Currency
					onClick={handleCurrentCurrencyClick}
					currency={currency}
					currentCurrency={currentCurrency}
					
					/>

				))}
						
			</ul>

			<Footer childcurrentCurrency={currentCurrency} />

		</div>
	);
}
