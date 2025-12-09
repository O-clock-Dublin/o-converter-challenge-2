import { useState } from "react"
import currencies from "../data/currencies"


export default function Footer() {
    const [currentCurrency, setCurrentCurrency] = useState(currencies[0]);

    const [isRounded, setIsRounded] = useState(false)

    function handleRoundClick() {
        setIsRounded(!isRounded)
    }

    
    return (
        		<footer className="result">
				<div className="result__amount">{isRounded ? currentCurrency.rate.toFixed(2) : currentCurrency.rate}</div>
				<div className="result__currency">{currentCurrency.description}</div>
				<button onClick={handleRoundClick} type="button" className="result__button" >{isRounded ? "Désarondir" : "Arrondir"}</button>
			</footer>
    )
}