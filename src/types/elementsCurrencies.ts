import { ICurrency } from "../data/currencies";

export interface IelementsCurrencies {
    currency: ICurrency
    onClick: (currency : ICurrency) => void
    currentCurrency: ICurrency
}