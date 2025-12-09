
import { ICurrency } from "../data/currencies";

export default function Footer({
    currentCurrency,
    handleRoundClick,
    isRounded,
}: {
    currentCurrency: ICurrency;
    handleRoundClick: () => void;
    isRounded: boolean;
}) {
    return (
        <footer className="footer">
            <div className="result__amount">{isRounded ? currentCurrency.rate.toFixed(2) : currentCurrency.rate}</div>
                <div className="result__currency">{currentCurrency.description}</div>
                <button
                onClick= {handleRoundClick}
                type="button"
                className="result__button"
                >
                {isRounded ? "Désarrondir" : "Arrondir"}
                </button>
        </footer>);
}