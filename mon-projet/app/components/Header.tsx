import Link from 'next/link';

export default function Header() {
  return (
    <header className="main-header">
      <nav className="nav-container">
        <Link href="/" className="logo">🇨🇲 Tourisme Cameroun</Link>
        <div className="nav-links">
          <Link href="/regions">Régions</Link>
          <Link href="/login" className="btn-secondary">Connexion</Link>
          <Link href="/register" className="btn-primary">S'inscrire</Link>
        </div>
      </nav>
    </header>
  );
}