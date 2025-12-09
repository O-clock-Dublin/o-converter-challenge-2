import { useState } from "react";
import { ICurrency } from "../data/currencies";

export default function Footer({ currency } : { currency: ICurrency }) {
	const [isRounded, setIsRounded] = useState(false);

	function handleRoundClick () {
		setIsRounded(!isRounded)
	}
  
  return (
			<footer className="result">
				<div className="result__amount">{isRounded ? currency.rate.toFixed(2) : currency.rate}</div>
				<div className="result__currency">{currency.description}</div>
				<button onClick={handleRoundClick} type="button" className="result__button" >{isRounded ? "Désarondir" : "Arrondir"}</button>
			</footer>
  )
}