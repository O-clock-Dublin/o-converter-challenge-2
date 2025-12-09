import { useState } from "react";
import { ICurrency } from "../data/currencies";

export default function Currency({ currency }: { currency: ICurrency }) {
    const [isRateDisplayed, setIsRateDisplayed] = useState(false);

    return (
    <li className="currency">
        <button type="button" className="currency__button">
        {currency.description}
        </button>

        <button
        type="button"
        onClick={() => setIsRateDisplayed(!isRateDisplayed)}
        >
        {isRateDisplayed ? "Cacher" : "Afficher"}
        </button>

        {isRateDisplayed && <span>{currency.rate.toFixed(2)}</span>}
    </li>
    );
}
