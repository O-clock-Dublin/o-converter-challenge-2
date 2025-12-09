import { useState } from "react";
import currencies, { ICurrency } from '../data/currencies';

interface FooterProps {
  currentCurrency: ICurrency; 

}

export default function Footer(props: FooterProps) {
const [isRounded, setIsRounded] = useState(false);
	function handleRoundClick () {
		setIsRounded(!isRounded)
    
    
	}
  return (
      <footer className="result">
				<div className="result__amount">{isRounded ? props.currentCurrency.rate.toFixed(2) : props.currentCurrency.rate}</div>
				<div className="result__currency">{props.currentCurrency.description}</div>
				<button onClick={handleRoundClick} type="button" className="result__button" >{isRounded ? "Désarondir" : "Arrondir"}</button>
			</footer>
  )
}