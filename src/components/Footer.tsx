import { useState } from "react";
import { ICurrency } from "../data/currencies";


export default function Footer(props: {childcurrentCurrency: ICurrency}) {
    const [isRounded, setIsRounded] = useState(false);
return (

    <footer className="result">
				<div className="result__amount">{isRounded ? props.childcurrentCurrency.rate.toFixed(2) : props.childcurrentCurrency.rate}</div>
				<div className="result__currency">{props.childcurrentCurrency.description}</div>
				<button onClick={() => setIsRounded(!isRounded)} type="button" className="result__button" >{isRounded ? "Désarondir" : "Arrondir"}</button>
			</footer>
)

}