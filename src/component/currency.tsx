import { ICurrency } from "../data/currencies";

export default function Currency(
  { currency, currentCurrency, setCurrentCurrency } 
  : { currency: ICurrency, 
    currentCurrency: ICurrency,
    setCurrentCurrency: (currency: ICurrency) => void }) {

    function handleCurrentCurrencyClick(banane : ICurrency) {
      setCurrentCurrency(banane)
    }
    return(
      <li className="currency" key={currency.code}>< button type="button" onClick={() => handleCurrentCurrencyClick(currency)} className={currency.code === currentCurrency.code ? "currency__button selected" : "currency__button"}>
        {currency.description}
      </button></li>
    )
}