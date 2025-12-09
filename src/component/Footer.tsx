import { ICurrency } from "../data/currencies";

interface FooterProps {
    currentCurrency: ICurrency;
    isRounded: boolean;
    handleRoundClick: () => void;
}
export default function Footer({ currentCurrency, isRounded, handleRoundClick }: FooterProps) {
    return (
        <footer className="result">
				<div className="result__amount">{isRounded ? currentCurrency.rate.toFixed(2) : currentCurrency.rate}</div>
				<div className="result__currency">{currentCurrency.description}</div>
				<button onClick={handleRoundClick} type="button" className="result__button" >{isRounded ? "Désarondir" : "Arrondir"}</button>
			</footer>
    )
}