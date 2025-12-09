import { useState } from 'react';
import type { ICurrency } from '../data/currencies.ts';

export const Currency = ({
  setCurrentCurrency,
  currentCurrency,
  currency,
}: {
  setCurrentCurrency: (currency: ICurrency) => void;
  currentCurrency: ICurrency;
  currency: ICurrency;
}) => {
  function handleCurrentCurrencyClick(banane: ICurrency) {
    setCurrentCurrency(banane);
  }
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibleClick = (isVisible: boolean) => {
    setIsVisible(!isVisible);
  };

  return (
    <li className="currency">
      {isVisible ? (
        <button
          type="button"
          onClick={() => {
            handleVisibleClick(isVisible);
          }}
        >
          👀
        </button>
      ) : (
        <>
          <p>{currency.rate.toFixed(2)}</p>
          <button
            type="button"
            onClick={() => {
              handleVisibleClick(isVisible);
            }}
          >
            ❌
          </button>
        </>
      )}

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
  );
};
