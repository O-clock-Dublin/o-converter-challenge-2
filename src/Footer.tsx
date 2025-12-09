import { useState } from 'react';
import { ICurrency } from './data/currencies';

interface FooterProps {
	currentCurrency: ICurrency;
}

export default function Footer({ currentCurrency }: FooterProps) {
	const [isRounded, setIsRounded] = useState(false);

	function handleRoundClick() {
		setIsRounded(!isRounded);
	}

	return (
		<footer className="result">
			<div className="result__amount">
				{isRounded ? currentCurrency.rate.toFixed(2) : currentCurrency.rate}
			</div>
			<div className="result__currency">{currentCurrency.description}</div>
			<button onClick={handleRoundClick} type="button" className="result__button">
				{isRounded ? 'Désarondir' : 'Arrondir'}
			</button>
		</footer>
	);
}

