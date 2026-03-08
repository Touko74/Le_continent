import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="hero">
      <h1 style={{fontSize: '3.5rem', marginBottom: '10px'}}>L'Afrique en miniature</h1>
      <p style={{fontSize: '1.2rem', marginBottom: '30px'}}>Découvrez les richesses des 10 régions du Cameroun</p>
      <Link href="/regions" className="btn-primary" style={{width: 'auto', padding: '15px 40px', fontSize: '1.1rem'}}>
        Explorer maintenant
      </Link>
    </main>
  );
}