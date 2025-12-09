import { useState } from "react";
import { ICurrency } from "../../data/currencies";
import HideButton from "../utils/HideButton";

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
      <>
        < button type="button" onClick={() => handleCurrentCurrencyClick(currency)} className={currency.code === currentCurrency.code ? "currency__button selected" : "currency__button"}>
          {currency.description}
          {displayRate && (
            <span className= "currency__rate" >
              ({currency.rate.toFixed(2)})
            </span>
          )}
        </button>
        <button type="button" className="rate-button" onClick={handleDisplayRateClick}>
          <HideButton 
            size={"24"}
            color={"#bb5432"}
            isNotClick={!displayRate}
          />
        </button>
      </>
    )
}