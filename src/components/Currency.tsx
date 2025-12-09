import { IelementsCurrencies } from "../types/elementsCurrencies";

export default function diplayCurrency({onClick, currency, currentCurrency}: IelementsCurrencies){

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
				{currency.description}
		</button>
	</li>

		)

}