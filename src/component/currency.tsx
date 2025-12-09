import { useState } from "react";
import { ICurrency } from "../data/currencies";
import DisplayRateButton from "./displayRateButton";

export default function Currency(
  { currency, currentCurrency, setCurrentCurrency } 
  : { currency: ICurrency, 
    currentCurrency: ICurrency,
    setCurrentCurrency: (currency: ICurrency) => void }) {

    const [displayRate, setDisplayRate] = useState(false);

    function handleCurrentCurrencyClick(banane : ICurrency) {
      setCurrentCurrency(banane)
    }

    function handleDisplayRateClick() {
      setDisplayRate(!displayRate)
    }

    return(
      <li className="currency" key={currency.code}>
        < button type="button" onClick={() => handleCurrentCurrencyClick(currency)} className={currency.code === currentCurrency.code ? "currency__button selected" : "currency__button"}>
          {currency.description}
          <span className= {displayRate ? "currency__rate" : "currency__rate hidden"}>
            ({currency.rate})
          </span>
        </button>
        <button type="button" className="rate-button" onClick={handleDisplayRateClick}>
          <DisplayRateButton 
            size={"24"}
            color={"#bb5432"}
            isClick={!displayRate}
          />
        </button>
      </li>
    )
}