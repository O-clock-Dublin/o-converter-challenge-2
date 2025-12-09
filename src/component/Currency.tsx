import currencies, { ICurrency } from "../data/currencies";

export default function Currency( { currentCurrency, handleCurrentCurrencyClick, roundedMap, handleToggleRoundClick } : { 
    currentCurrency: ICurrency; handleCurrentCurrencyClick: 
    (currency: ICurrency) => void; roundedMap: Record<string, boolean>; handleToggleRoundClick: 
    (currency: ICurrency) => void 
}) {
	return (
		<ul>
			{/* Je boucle sur chaque entrée de tableau grâce à la variable "currency" et je crée une li pour chaque currency */}
			{currencies.map((currency) =>
				<li className="currency" key={currency.code}>
					<button
						type="button"
						onClick={() => handleCurrentCurrencyClick(currency)}
						className={currency === currentCurrency ? "currency__button selected" : "currency__button"}
					>
						{currency.description}
					</button>
                    {currency === currentCurrency ? <div>{roundedMap[currency.code] ? currency.rate.toFixed(2) : currency.rate}</div> : null}
                    
                    <button
                        type="button"
                        onClick={() => handleToggleRoundClick(currency)}
                        className= "toggle_button"
                    >
                        {roundedMap[currency.code] ? "ON" : "OFF"}
                    </button>
				</li>
			)}
		</ul>
	);
}