import { useState } from "react";
import { IelementsCurrencies } from "../types/elementsCurrencies";

export default function diplayCurrency({onClick, currency, currentCurrency}: IelementsCurrencies){

	const [initialIsRate, setInitialIsRate]=useState(false)
    return(

	<li className="currency" key={currency.code}>
		<button 
		type="button"
		onClick={() => onClick(currency)}
		className={
			currency === currentCurrency
			? "currency__button selected"
			: "currency__button"
			}
		>
				{currency.description} {initialIsRate ? `(${currency.rate.toFixed(2)})` : ""}  
				<button onClick={()=> setInitialIsRate(!initialIsRate)} className="handleHide" type="button"> {initialIsRate ? "❌" : "👀"}</button>
		</button>
	</li>

		)

}