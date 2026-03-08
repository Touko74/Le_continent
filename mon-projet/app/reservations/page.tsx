"use client";

import { useState } from "react";

interface ReservationForm {
  name: string;
  email: string;
  destination: string;
  date: string;
  people: number;
}

export default function ReservationPage() {
  const [form, setForm] = useState<ReservationForm>({
    name: "",
    email: "",
    destination: "",
    date: "",
    people: 1,
  });

  const [message, setMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "people" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setMessage("Votre réservation a bien été enregistrée !");
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
        background: "white",
        padding: 30,
        borderRadius: 10,
        boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        borderTop: "6px solid #ce1126",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#007a33",
          marginBottom: 25,
          borderBottom: "3px solid #fcd116",
          paddingBottom: 10,
        }}
      >
        Réserver une destination
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 20 }}
      >
        <label htmlFor="name" style={{ fontWeight: 600, color: "#ce1126" }}>
          Nom complet
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Entrez votre nom"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            padding: 12,
            border: "2px solid #fcd116",
            borderRadius: 6,
          }}
        />

        <label htmlFor="email" style={{ fontWeight: 600, color: "#ce1126" }}>
          Adresse email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="exemple@mail.com"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            padding: 12,
            border: "2px solid #fcd116",
            borderRadius: 6,
          }}
        />

        <label htmlFor="destination" style={{ fontWeight: 600, color: "#ce1126" }}>
          Destination
        </label>
        <input
          id="destination"
          type="text"
          name="destination"
          placeholder="Entrez la destination"
          value={form.destination}
          onChange={handleChange}
          required
          style={{
            padding: 12,
            border: "2px solid #fcd116",
            borderRadius: 6,
          }}
        />

        <label htmlFor="date" style={{ fontWeight: 600, color: "#ce1126" }}>
          Date de réservation
        </label>
        <input
          id="date"
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          style={{
            padding: 12,
            border: "2px solid #fcd116",
            borderRadius: 6,
          }}
        />

        <label htmlFor="people" style={{ fontWeight: 600, color: "#ce1126" }}>
          Nombre de personnes
        </label>
        <input
          id="people"
          type="number"
          name="people"
          min={1}
          placeholder="1"
          value={form.people}
          onChange={handleChange}
          required
          style={{
            padding: 12,
            border: "2px solid #fcd116",
            borderRadius: 6,
          }}
        />

        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #007a33, #fcd116, #ce1126)",
            color: "white",
            padding: 14,
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Réserver
        </button>
      </form>

      {message && (
        <p
          style={{
            marginTop: 25,
            color: "#007a33",
            fontWeight: "bold",
            textAlign: "center",
            background: "#f4fff4",
            padding: 12,
            borderRadius: 6,
            border: "1px solid #007a33",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}
