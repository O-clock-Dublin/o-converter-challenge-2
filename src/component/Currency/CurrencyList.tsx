import currencies, { ICurrency } from "../../data/currencies"
import Currency from "./Currency"

export default function CurrencyList({ currentCurrency, setCurrentCurrency } 
  : { currentCurrency: ICurrency, 
    setCurrentCurrency: (currency: ICurrency) => void }) {
  return (
    <ul className="currencies">
      {currencies.map((currency) => {
        return (
          <li className="currency" key={currency.code}>
            <Currency currency={currency} currentCurrency={currentCurrency} setCurrentCurrency={setCurrentCurrency}/>
          </li>
        )
      }
      )}
    </ul>
  )
}