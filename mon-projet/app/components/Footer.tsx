import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">🇨🇲 Cameroon Tour</h3>
          <p>Explorez l'Afrique en miniature. Découvrez la richesse culturelle et touristique des 10 régions du Cameroun.</p>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/regions">Les Régions</Link></li>
            <li><Link href="/login">Connexion</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Culture</h4>
          <ul>
            <li>Gastronomie locale</li>
            <li>Sites touristiques</li>
            <li>Activités culturelles</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@cameroontour.cm</p>
          <p>Tel: +237 6xx xxx xxx</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cameroon Tour - Projet Académique. Tous droits réservés.</p>
      </div>
    </footer>
  );
}