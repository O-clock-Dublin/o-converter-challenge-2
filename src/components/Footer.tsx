import { useState } from "react";
import { ICurrency } from "../data/currencies";

interface FooterProps {
	selectedCurrency: ICurrency;
}

export default function Footer({ selectedCurrency }: FooterProps) {
	const [isRounded, setIsRounded] = useState(false);

	return (
		<footer className="result">
			<button type="button" onClick={() => setIsRounded(!isRounded)}>
				Arrondir
			</button>

			<div className="result__amount">
				{isRounded
					? selectedCurrency.rate.toFixed(2)
					: selectedCurrency.rate}
			</div>

			<div className="result__currency">
				{selectedCurrency.description}
			</div>
		</footer>
	);
}