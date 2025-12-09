import { useState } from 'react';
import { ICurrency } from '../data/currencies';

export default function Footer(props: ICurrency) {
  function handleRoundClick () {
		setIsRounded(!isRounded)
	}
  
  const [isRounded, setIsRounded] = useState(false);

  return (
    <footer className="result">
      <div className="result__amount">{isRounded ? props.rate.toFixed(2) : props.rate}</div>
      <div className="result__currency">{props.description}</div>
      <button onClick={handleRoundClick} type="button" className="result__button" >{isRounded ? "Désarondir" : "Arrondir"}</button>
    </footer>
  )
}

