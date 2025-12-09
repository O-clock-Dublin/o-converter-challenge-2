import { useState } from "react";
import currencies, { ICurrency } from '../data/currencies';

interface  CurrencyProps {
  currency: ICurrency;
  currentCurrency: ICurrency;
  handleCurrentCurrencyClick: (currency: ICurrency) => void;
}

export default function Currency(props: CurrencyProps) {
const [isRateDisplayed, setIsRateDisplayed] = useState(false);
function handleToggleRate(){
  setIsRateDisplayed(!isRateDisplayed);
}
return (
  <li className="currency" key={props.currency.code}>< button type="button" onClick={() => props.handleCurrentCurrencyClick(props.currency)} className={props.currency === props.currentCurrency ? "currency__button selected" : "currency__button"}>
						{props.currency.description}
					</button>
          {isRateDisplayed && <div>{props.currency.rate.toFixed(2)}</div>}
          <button onClick={handleToggleRate}>{isRateDisplayed ? "Cacher" : "Afficher"}</button></li>
)
	}