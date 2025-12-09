import { useState } from 'react';
import { ICurrency } from './data/currencies';

interface CurrencyProps {
	currency: ICurrency;
	isSelected: boolean;
	onClick: () => void;
}

export default function Currency({ currency, isSelected, onClick }: CurrencyProps) {
	const [isRateDisplayed, setIsRateDisplayed] = useState(false);

	function handleToggleRate() {
		setIsRateDisplayed(!isRateDisplayed);
	}

	return (
		<li className="currency">
			<button
				type="button"
				onClick={onClick}
				className={isSelected ? 'currency__button selected' : 'currency__button'}
			>
				{currency.description}
			</button>
			{isRateDisplayed && (
				<span className="currency__rate">{currency.rate.toFixed(2)}</span>
			)}
			<button
				type="button"
				onClick={handleToggleRate}
				className="currency__toggle"
			>
				{isRateDisplayed ? 'Cacher' : 'Afficher'}
			</button>
		</li>
	);
}

