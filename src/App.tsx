import { useState } from 'react';
import './App.css';
import currencies, { ICurrency } from './data/currencies';
import Currency from "./Currency";
import Footer from "./Footer";

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
  				{currencies.map(currency => (
					<Currency key={currency.code} currency={currency} currentCurrency={currentCurrency} onSelect={handleCurrentCurrencyClick}/>
				))}
			</ul>

			<Footer currentCurrency={currentCurrency} />
		</div>
	);
}
