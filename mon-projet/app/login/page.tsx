// app/login/page.tsx
export default function LoginPage() {
  return (
    <div className="auth-container">
      <h2>Connexion</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="votre@email.com" />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input type="password" />
        </div>
        <button type="submit" className="btn-primary">Se connecter</button>
      </form>
    </div>
  );
}