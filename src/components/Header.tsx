// src/components/Header.tsx

/**
 * Composant responsable de l'affichage de l'en-tête de l'application.
 *
 * @remarks
 * Ce composant est purement présentatif et ne contient aucune logique.
 *
 * @returns Le JSX de l'en-tête de l'application.
 */
export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <div className="header__value">1 euro</div>
    </header>
  );
}
