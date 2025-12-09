import type { ICurrency } from '../data/currencies.ts';
import currencies from '../data/currencies.ts';

export const Currency = ({
  setCurrentCurrency,
  currentCurrency,
}: {
  setCurrentCurrency: (currency: ICurrency) => void;
  currentCurrency: ICurrency;
}) => {
  function handleCurrentCurrencyClick(banane: ICurrency) {
    setCurrentCurrency(banane);
  }

  return currencies.map((currency: ICurrency) => (
    <li className="currency" key={currency.code}>
      <button
        type="button"
        onClick={() => handleCurrentCurrencyClick(currency)}
        className={
          currency === currentCurrency
            ? 'currency__button selected'
            : 'currency__button'
        }
      >
        {currency.description}
      </button>
    </li>
  ));
};
