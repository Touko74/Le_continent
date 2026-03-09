'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


function Header() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();


  const checkUser = () => {
    const savedUser = localStorage.getItem('user');
    setUser(savedUser ? JSON.parse(savedUser) : null);
  };

  useEffect(() => {
    
    checkUser();

 
    window.addEventListener('storage', checkUser);
    
    
    const interval = setInterval(checkUser, 1000);

    return () => {
      window.removeEventListener('storage', checkUser);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
    router.refresh();
  };

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
          <Link href="/reservation">Réserver</Link>
          
          {user ? (
           
            <>
              <Link href="/profil" style={{ fontWeight: 'bold', color: 'var(--vert)' }}>
                Mon Profil
              </Link>
              <button onClick={handleLogout} className="btn-logout">
                Déconnexion
              </button>
            </>
          ) : (
            /* --- MENU SI DÉCONNECTÉ --- */
            <>
              <Link href="/login">Connexion</Link>
              <Link href="/register" className="btn-register">S'inscrire</Link>
            </>
          )}
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
          <p>L'Afrique en miniature : explorez les 10 régions du pays.</p>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/regions">Régions</Link></li>
            <li><Link href="/reservation">Réserver</Link></li>
            <li><Link href="/profil">Mon Profil</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@cameroontour.cm</p>
          <p>Yaoundé / Douala, Cameroun</p>
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