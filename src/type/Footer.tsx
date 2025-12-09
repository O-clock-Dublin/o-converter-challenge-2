import { ICurrency } from "../data/currencies";

export default interface FooterProps {
    currentCurrency: ICurrency;
    isRounded: boolean;
    handleRoundClick: () => void;
}