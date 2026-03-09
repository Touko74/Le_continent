"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Données extraites strictement de ton dump MySQL
const regionData: Record<string, any> = {
  "1": { 
    nom: "Adamaoua", 
    elements: [
      { type: "Chef-lieu", nom: "Ngaoundéré", img: "/assets/regions/adamaoua/ngaoundere.jpg", color: "var(--vert)" },
      { type: "Plat", nom: "Sauce Foléré", img: "/assets/regions/adamaoua/sauce_folere.jpg", color: "var(--jaune)" },
      { type: "Loisir", nom: "Montagne", img: "/assets/regions/adamaoua/montagne.jpg", color: "var(--rouge)" }
    ]
  },
  "2": { 
    nom: "Centre", 
    elements: [
      { type: "Chef-lieu", nom: "Yaoundé", img: "/assets/regions/centre/yde.jpg", color: "var(--vert)" },
      { type: "Plat", nom: "Okok", img: "/assets/regions/centre/okok.png", color: "var(--jaune)" },
      { type: "Loisir", nom: "Musée", img: "/assets/regions/centre/musee.jpg", color: "var(--rouge)" }
    ]
  },
  "3": { 
    nom: "Est", 
    elements: [
      { type: "Chef-lieu", nom: "Bertoua", img: "/assets/regions/est/bertoua.jpg", color: "var(--vert)" },
      { type: "Plat", nom: "Mbol", img: "/assets/regions/est/mbol.jpeg", color: "var(--jaune)" },
      { type: "Loisir", nom: "Réserve de faune", img: "/assets/regions/est/reserve.jpg", color: "var(--rouge)" }
    ]
  },
  "4": { 
    nom: "Extrême-Nord", 
    elements: [
      { type: "Chef-lieu", nom: "Maroua", img: "/assets/regions/extreme-nord/maroua.jpg", color: "var(--vert)" },
      { type: "Plat", nom: "Kilishi", img: "/assets/regions/extreme-nord/Kilishi.jpg", color: "var(--jaune)" },
      { type: "Loisir", nom: "Parc de Waza", img: "/assets/regions/extreme-nord/parcwaza.jpg", color: "var(--rouge)" }
    ]
  },
  "5": { 
    nom: "Littoral", 
    elements: [
      { type: "Chef-lieu", nom: "Douala", img: "/assets/regions/littoral/douala.jpeg", color: "var(--vert)" },
      { type: "Plat", nom: "Ndolé", img: "/assets/regions/littoral/ndole.jpeg", color: "var(--jaune)" },
      { type: "Loisir", nom: "Plage", img: "/assets/regions/littoral/plage.jpeg", color: "var(--rouge)" }
    ]
  },
  "6": { 
    nom: "Nord", 
    elements: [
      { type: "Chef-lieu", nom: "Garoua", img: "/assets/regions/nord/garoua.jpg", color: "var(--vert)" },
      { type: "Plat", nom: "Fufu et Gombo", img: "/assets/regions/nord/fufu_gombo.jpg", color: "var(--jaune)" },
      { type: "Loisir", nom: "Parc de Bouba Ndjida", img: "/assets/regions/nord/Bouba_Njida.jpg", color: "var(--rouge)" }
    ]
  },
  "7": { 
    nom: "Nord-Ouest", 
    elements: [
      { type: "Chef-lieu", nom: "Bamenda", img: "/assets/regions/nord-ouest/bamenda.jpeg", color: "var(--vert)" },
      { type: "Plat", nom: "Eru", img: "/assets/regions/nord-ouest/eru.jpeg", color: "var(--jaune)" },
      { type: "Loisir", nom: "Randonnée", img: "/assets/regions/nord-ouest/rando.jpeg", color: "var(--rouge)" }
    ]
  },
  "8": { 
    nom: "Ouest", 
    elements: [
      { type: "Chef-lieu", nom: "Bafoussam", img: "/assets/regions/ouest/Bafoussam.jpeg", color: "var(--vert)" },
      { type: "Plat", nom: "Taro", img: "/assets/regions/ouest/taro.jpeg", color: "var(--jaune)" },
      { type: "Loisir", nom: "Palais Royal", img: "/assets/regions/ouest/palais.jpg", color: "var(--rouge)" }
    ]
  },
  "9": { 
    nom: "Sud", 
    elements: [
      { type: "Chef-lieu", nom: "Ebolowa", img: "/assets/regions/sud/ebolowa.jpg", color: "var(--vert)" },
      { type: "Plat", nom: "Sangha", img: "/assets/regions/sud/sangha.jpg", color: "var(--jaune)" },
      { type: "Loisir", nom: "Chutes de la Lobé", img: "/assets/regions/sud/lobe.jpeg", color: "var(--rouge)" }
    ]
  },
  "10": { 
    nom: "Sud-Ouest", 
    elements: [
      { type: "Chef-lieu", nom: "Buea", img: "/assets/regions/sud-ouest/buea.jpg", color: "var(--vert)" },
      { type: "Plat", nom: "Sole Braisée", img: "/assets/regions/sud-ouest/soll-braise.jpeg", color: "var(--jaune)" },
      { type: "Loisir", nom: "Mont Cameroun", img: "/assets/regions/sud-ouest/mt_cameroun.png", color: "var(--rouge)" }
    ]
  }
};

export default function RegionDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const region = regionData[id];

  if (!region) {
    return <div className="auth-container"><h1>Région introuvable</h1><Link href="/regions">Retour</Link></div>;
  }

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Link href="/regions" style={{ color: 'var(--vert)', fontWeight: 'bold', textDecoration: 'none' }}>
        ← Explorer d'autres régions
      </Link>

      <h1 style={{ 
        textAlign: 'center', 
        fontSize: '3.5rem', 
        color: 'var(--vert)', 
        margin: '30px 0',
        textTransform: 'uppercase',
        letterSpacing: '2px'
      }}>
        {region.nom}
      </h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '25px' 
      }}>
        {region.elements.map((item: any, index: number) => (
          <div key={index} className="card-detail-zoom">
            <div style={{ 
              position: 'absolute', 
              top: '15px', 
              left: '15px', 
              background: item.color, 
              color: item.color === 'var(--jaune)' ? 'black' : 'white',
              padding: '6px 15px',
              borderRadius: '20px',
              fontWeight: 'bold',
              zIndex: 2,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}>
              {item.type}
            </div>
            <div className="img-container">
              <img src={item.img} alt={item.nom} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h2 style={{ margin: 0, fontSize: '1.8rem', color: '#333' }}>{item.nom}</h2>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Link href="/reservation" className="btn-primary" style={{ padding: '20px 50px', fontSize: '1.3rem', borderRadius: '50px' }}>
          Réserver mon séjour en {region.nom}
        </Link>
      </div>
    </div>
  );
}