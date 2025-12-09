import { useState } from "react"
import Footer from "./Footer"
import currencies from "../../data/currencies"
import CurrencyList from "./CurrencyList"

export default function CurrencySection () {
  const [currentCurrency, setCurrentCurrency] = useState(currencies[0])
  return (
    <>
      <CurrencyList 
        currentCurrency={currentCurrency}
        setCurrentCurrency={setCurrentCurrency}
      />
      <Footer 
        currency={currentCurrency}
      />
    </>
  )
}