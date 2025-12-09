import './App.css';
import CurrencySection from './component/Currency/CurrencySection';
import Header from './component/Header';

export default function App() {
	// useState on a : const [ ValeurActuelle, modificationDeValeurActuelle ] = useState(valeurDeDépart) ?
	
	return (
		<div className="app">
			<Header />

			<CurrencySection />
		</div>
	);
}
