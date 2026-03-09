'use client';

import Link from 'next/link';
import Image from 'next/image';


const regions = [
  { id: 1, nom: "Adamaoua", chefLieu: "Ngaoundéré", plat: "Sauce foléré", activite: "Randonnée au Mont Ngaoundéré", image: "/assets/regions/adamaoua/ngaoundere.jpg" },
  { id: 2, nom: "Centre", chefLieu: "Yaoundé", plat: "Okok", activite: "Visite du musée national", image: "/assets/regions/centre/yde.jpg" },
  { id: 3, nom: "Est", chefLieu: "Bertoua", plat: "Mbole", activite: "Visite de la réserve naturelle", image: "/assets/regions/est/bertoua.jpg" },
  { id: 4, nom: "Extrême-Nord", chefLieu: "Maroua", plat: "Kilishi", activite: "Safari au Parc de Waza", image: "/assets/regions/extreme-nord/maroua.jpg" },
  { id: 5, nom: "Littoral", chefLieu: "Douala", plat: "Ndolé", activite: "Balade sur la plage", image: "/assets/regions/littoral/douala.jpeg" },
  { id: 6, nom: "Nord", chefLieu: "Garoua", plat: "Fufu et Gombo", activite: "Parc de Bouba Ndjida", image: "/assets/regions/nord/garoua.jpg" },
  { id: 7, nom: "Nord-Ouest", chefLieu: "Bamenda", plat: "Eru", activite: "Randonnée", image: "/assets/regions/nord-ouest/bamenda.jpeg" },
  { id: 8, nom: "Ouest", chefLieu: "Bafoussam", plat: "Taro", activite: "Palais Royal", image: "/assets/regions/ouest/Bafoussam.jpeg" },
  { id: 9, nom: "Sud", chefLieu: "Ebolowa", plat: "Sangha", activite: "Chutes de la Lobé", image: "/assets/regions/sud/ebolowa.jpg" },
  { id: 10, nom: "Sud-Ouest", chefLieu: "Buea", plat: "Sole Braisée", activite: "Mont Cameroun", image: "/assets/regions/sud-ouest/buea.jpg" },
];

export default function RegionsPage() {
  return (
    <div style={{ padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', color: 'var(--vert)', fontSize: '2.5rem', marginBottom: '40px' }}>
        Nos Régions
      </h1>

      <div className="regions-grid">
        {regions.map((region) => (
    
          <Link href={`/regions/${region.id}`} key={region.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="region-card clickable-card">
              <div className="card-image-container">
                <img src={region.image} alt={region.nom} className="region-img" />
                <div className="overlay-name">
                  <h2>{region.chefLieu.toUpperCase()}</h2>
                </div>
              </div>

              <div className="card-content">
                <h3 style={{ color: 'var(--rouge)', marginBottom: '10px' }}>{region.nom}</h3>
                <p>📍 <strong>Chef-lieu :</strong> {region.chefLieu}</p>
                <p>🍲 <strong>Plat :</strong> {region.plat}</p>
                <p>🗺️ <strong>Activité :</strong> {region.activite}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}