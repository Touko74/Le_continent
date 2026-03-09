'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. On crée un utilisateur fictif
    const userData = {
      name: "Voyageur Camerounais",
      email: email,
    };

    // 2. On enregistre dans le localStorage
    localStorage.setItem('user', JSON.stringify(userData));

    // 3. LE PLUS IMPORTANT : Forcer le rafraîchissement complet
    // router.push('/') seul ne suffit pas toujours à mettre à jour le Layout
    window.location.href = '/profil'; 
  };

  return (
    <div className="auth-container">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="votre@email.com" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="••••••••" 
            required 
          />
        </div>
        <button type="submit" className="btn-primary">Se connecter</button>
      </form>
    </div>
  );
}