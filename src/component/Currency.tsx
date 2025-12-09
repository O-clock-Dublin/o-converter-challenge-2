import currencies from "../data/currencies";

export default function Currency( { currentCurrency, handleCurrentCurrencyClick, isRounded, handleRoundClick } : { 
    currentCurrency: any; handleCurrentCurrencyClick: 
    (currency: any) => void; isRounded: boolean; handleRoundClick: 
    (currency: any) => void 
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
                    <button
                        type="button"
                        onClick={() => handleRoundClick(currency)}
                        className= "toggle_button"
                    >
                        {isRounded ? "ON" : "OFF"}
                    </button>
				</li>
			)}
		</ul>
	);
}