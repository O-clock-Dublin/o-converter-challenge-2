import { useState } from 'react';
import './App.css';
import currencies, { ICurrency } from './data/currencies';
import Footer from './component/Footer';
import Currency from './component/Currency';

export default function App() {

	// On crée un state afin de manipuler la devise courante
    // on l'initialise avec la première devise du tableau importé
    // useState on a : const [ ValeurActuelle, modificationDeValeurActuelle ] = useState(valeurDeDépart) ?
    const [currentCurrency, setCurrentCurrency] = useState(currencies[0])
    const [isRounded, setIsRounded] = useState(false);
	const [roundedMap, setRoundedMap] = useState<Record<string, boolean>>({})

    // On crée une fonction pour selectionner la devise souhaitée
    // const handleCurrentCurrencyClick = (currency : ICurrency) => {
    // 	setCurrentCurrency(currency)
    // }
    // On défini une variable placeholder qui sera remplacée par le paramètre d'entrée à l'utilisation de la fonction, ici banane
    function handleCurrentCurrencyClick(banane : ICurrency) {
        setCurrentCurrency(banane)
    }

    function handleRoundClick () {
        setIsRounded(!isRounded)
    }

	function handleToggleRoundClick(currency: ICurrency) {
        setRoundedMap(prev => ({
            ...prev,
            [currency.code]: !prev[currency.code]   // toggle seulement cette devise
        }));
    }

    console.log(isRounded)

	return (
		<div className="app">
			<header className="header">
				<h1 className="header__title">Converter</h1>
				<div className="header__value">1 euro</div>
			</header>

			<ul className="currencies">
				<Currency 
				currentCurrency={currentCurrency} 
				handleCurrentCurrencyClick={handleCurrentCurrencyClick} 
				roundedMap={roundedMap}
				handleToggleRoundClick={handleToggleRoundClick} />
			</ul>


			<Footer currentCurrency={currentCurrency} isRounded={isRounded} handleRoundClick={handleRoundClick} />
		</div>
	);
}
