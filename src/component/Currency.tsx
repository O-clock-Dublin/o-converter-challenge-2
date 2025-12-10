import { useState } from "react"
import { ICurrency } from "../data/currencies"

interface CurrencyProps {
    currency: ICurrency
    setCurrentCurrency: (currency: ICurrency) => void
    currentCurrency: ICurrency
}

export default function Currency({currency, setCurrentCurrency, currentCurrency} : CurrencyProps){

    const [isRateDisplayed, SetIsRateDisplayed] = useState(false)

    // On crée une fonction pour selectionner la devise souhaitée
	// const handleCurrentCurrencyClick = (currency : ICurrency) => {
	// 	setCurrentCurrency(currency)
	// }
	// On défini une variable placeholder qui sera remplacée par le paramètre d'entrée à l'utilisation de la fonction
	function handleCurrentCurrencyClick(currency : ICurrency) {
		setCurrentCurrency(currency)
	}

    function handleToggleRateDisplay(){
        SetIsRateDisplayed(!isRateDisplayed)
    }
    return 	<li 
        className="currency" 
        key={currency.code}>
            < button 
                type="button" 
                onClick={() => handleCurrentCurrencyClick(currency)} 
                className={currency === currentCurrency ? "currency__button selected" : "currency__button"}>
            {currency.description} {isRateDisplayed && currency.rate.toFixed(2)}
            </button>
            <button onClick={handleToggleRateDisplay} type="button" >{isRateDisplayed ? '🙈' : '👀'}</button></li>
}