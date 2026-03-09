"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Liste des activités prédéfinies par région
const activitiesByRegion: Record<string, string[]> = {
  "Littoral": ["Dégustation de Ndolé à Douala", "Visite des Chutes d'Ekom Nkam", "Balade sur les berges du Wouri"],
  "Sud-Ouest": ["Ascension du Mont Cameroun", "Détente sur les plages de Limbé", "Visite du jardin botanique"],
  "Ouest": ["Randonnée aux Chutes de la Métché", "Visite du Palais Royal de Foumban", "Découverte des chefferies Bamiléké"],
  "Centre": ["Visite du Monument de la Réunification", "Parc zoo-botanique de Mvog-Betsi", "Dégustation de Koki"],
  "Sud": ["Plages de Kribi (Lobe)", "Chutes de la Lobe", "Réserve de faune du Dja"],
  "Nord": ["Safari au Parc de Waza", "Visite des Gorges de Cola", "Rencontre avec les Lamidos"],
  "Extrême-Nord": ["Randonnée dans les Monts Mandara", "Visite du village artisanal de Maroua"],
  "Adamaoua": ["Chutes de Vina", "Randonnée sur le plateau de l'Adamaoua"],
  "Est": ["Exploration de la forêt équatoriale", "Rencontre avec les peuples Baka"],
  "Nord-Ouest": ["Visite du Lac Awing", "Artisanat de Bamenda"]
};

export default function ReservationPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    region: "",
    activite: "",
    date: "",
    people: 1,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "people" ? Number(value) : value,
      // Réinitialiser l'activité si la région change
      ...(name === "region" ? { activite: "" } : {})
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nouvelleRes = {
      region: form.region,
      activite: form.activite,
      date: form.date,
      statut: "Confirmé"
    };

    const anciennes = JSON.parse(localStorage.getItem('mes_reservations') || '[]');
    localStorage.setItem('mes_reservations', JSON.stringify([...anciennes, nouvelleRes]));

    setMessage("Réservation enregistrée avec succès !");
    setTimeout(() => router.push('/profil'), 2000);
  };

  return (
    <div className="auth-container" style={{ maxWidth: 650, borderTop: "6px solid #ce1126", marginTop: "40px" }}>
      <h1 style={{ textAlign: "center", color: "#007a33", marginBottom: 20 }}>Réserver une Activité</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        
        <label style={{ fontWeight: 600 }}>Sélectionnez une Région</label>
        <select name="region" value={form.region} onChange={handleChange} required className="form-input">
          <option value="">-- Choisir une région --</option>
          {Object.keys(activitiesByRegion).map((reg) => (
            <option key={reg} value={reg}>{reg}</option>
          ))}
        </select>

        {/* Liste des activités qui s'affiche seulement si une région est choisie */}
        {form.region && (
          <>
            <label style={{ fontWeight: 600 }}>Activité disponible</label>
            <select name="activite" value={form.activite} onChange={handleChange} required className="form-input">
              <option value="">-- Choisir l'activité --</option>
              {activitiesByRegion[form.region].map((act) => (
                <option key={act} value={act}>{act}</option>
              ))}
            </select>
          </>
        )}

        <label style={{ fontWeight: 600 }}>Date prévue</label>
        <input type="date" name="date" value={form.date} onChange={handleChange} required className="form-input" />

        <label style={{ fontWeight: 600 }}>Nombre de participants</label>
        <input type="number" name="people" min={1} value={form.people} onChange={handleChange} required className="form-input" />

        <button type="submit" className="btn-primary" style={{ background: "linear-gradient(90deg, #007a33, #fcd116, #ce1126)", border: "none" }}>
          Confirmer la Réservation
        </button>
      </form>

      {message && (
        <p style={{ marginTop: 20, color: "#007a33", textAlign: "center", fontWeight: "bold", background: "#f0fdf4", padding: "10px", borderRadius: "5px" }}>
          {message}
        </p>
      )}
    </div>
  );
}