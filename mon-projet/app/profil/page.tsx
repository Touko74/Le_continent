'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilPage() {
  const [user, setUser] = useState<any>(null);
  const [reservations, setReservations] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem('user');
    const savedRes = localStorage.getItem('mes_reservations');
    if (!data) {
      router.push('/login');
    } else {
      setUser(JSON.parse(data));
      if (savedRes) setReservations(JSON.parse(savedRes));
    }
  }, [router]);

  if (!user) return <div className="auth-container">Chargement...</div>;

  return (
    <div className="auth-container" style={{ maxWidth: '900px' }}>
      <h1 style={{ color: 'var(--vert)' }}>Tableau de bord de {user.name}</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px', marginTop: '20px' }}>
        <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h3>Mes Infos</h3>
          <p><strong>Email :</strong> {user.email}</p>
        </div>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
          <h3>Mes Activités</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--jaune)', textAlign: 'left' }}>
                <th style={{ padding: '10px' }}>Région</th>
                <th>Activité</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {reservations.length > 0 ? (
                reservations.map((res: any, i: number) => (
                  <tr key={i}><td style={{ padding: '10px' }}>{res.region}</td><td>{res.activite}</td><td style={{ color: 'green' }}>Confirmé</td></tr>
                ))
              ) : (
                <tr><td colSpan={3} style={{ padding: '20px', textAlign: 'center' }}>Aucune réservation pour le moment.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}