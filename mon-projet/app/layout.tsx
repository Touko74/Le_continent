import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className="main-header">
      <nav className="nav-container">
        
        <Link href="/" className="logo-link">
          <Image 
            src="/assets/logo.png" 
            alt="Cameroon Tour" 
            width={150} 
            height={50} 
            style={{ objectFit: 'contain' }}
            priority 
          />
        </Link>

        <div className="nav-links">
          <Link href="/regions">Régions</Link>
          <Link href="/login">Connexion</Link>
          <Link href="/register" className="btn-register">S'inscrire</Link>
        </div>

      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>🇨🇲 Cameroon Tour</h3>
          <p>Explorez les richesses des 10 régions du Cameroun.</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@cameroontour.cm</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cameroon Tour. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="layout-body">
        <Header />
        <main className="page-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}