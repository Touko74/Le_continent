'use client';

import Link from 'next/link';

export default function RegisterPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inscription terminée !");
  };

  return (
    <div className="auth-container">
      <h2>S'inscrire</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px' }}>
        Rejoignez l'aventure Cameroon Tour
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom complet</label>
          <input type="text" id="name" placeholder="Ex: Jean Douala" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Adresse Email</label>
          <input type="email" id="email" placeholder="votre@email.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" placeholder="••••••••" required />
        </div>

        <div className="form-group">
          <label htmlFor="confirm">Confirmer le mot de passe</label>
          <input type="password" id="confirm" placeholder="••••••••" required />
        </div>

        <button type="submit" className="btn-primary">
          Créer mon compte
        </button>
      </form>

      <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
        Déjà inscrit ? <Link href="/login" style={{ color: 'var(--vert)', fontWeight: 'bold' }}>Se connecter</Link>
      </div>
    </div>
  );
}