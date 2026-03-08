import Image from "next/image";
import { regions } from "../data/regions";

export default function RegionsPage() {
  return (
    <div className="container">
      <h1 style={{textAlign: 'center', margin: '40px 0', color: 'var(--vert)'}}>Nos Régions</h1>
      <div className="region-grid">
        {regions.map((region) => (
          <div key={region.name} className="card">
            <div style={{position: 'relative', width: '100%', height: '200px'}}>
              <Image src={region.images.capital} alt={region.name} fill style={{objectFit: 'cover'}} />
            </div>
            <div style={{padding: '20px'}}>
              <h2 style={{color: 'var(--rouge)', marginTop: 0}}>{region.name}</h2>
              <p><strong>📍 Chef-lieu :</strong> {region.capital}</p>
              <p><strong>🍲 Plat :</strong> {region.dish}</p>
              <p><strong>🎭 Activité :</strong> {region.activity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}