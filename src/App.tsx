import { useState } from 'react';
import { useEffect } from 'react';
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

	    // on garde en mémoire la devise précédente
    const [previousCurrency, setPreviousCurrency] = useState<ICurrency | null>(null);

    // On crée une fonction pour selectionner la devise souhaitée
    // const handleCurrentCurrencyClick = (currency : ICurrency) => {
    // 	setCurrentCurrency(currency)
    // }
    // On défini une variable placeholder qui sera remplacée par le paramètre d'entrée à l'utilisation de la fonction, ici banane
    function handleCurrentCurrencyClick(banane : ICurrency) {
		setPreviousCurrency(currentCurrency);
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
	
	// réinitialiser l'ancien toggle quand on change de devise
     useEffect(() => {
        if (!previousCurrency) return; // première sélection → rien à réinitialiser

        setRoundedMap(prev => ({
            ...prev,
            [previousCurrency.code]: false // remettre anciens ON → OFF
        }));
    }, [currentCurrency]); // se déclenche uniquement quand la devise change

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
