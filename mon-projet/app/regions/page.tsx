import { regions } from "../data/regions";
import Image from "next/image";

export default function RegionsPage() {
  return (
    <div>
      <h1>Les régions du Cameroun</h1>

      {regions.map((region) => (
        <div key={region.name}>
          <h2>{region.name}</h2>

          <Image
            src={region.images.capital}
            alt={region.capital}
            width={400}
            height={250}
          />

          <p>Chef-lieu : {region.capital}</p>
          <p>Plat : {region.dish}</p>
          <p>Activité : {region.activity}</p>
        </div>
      ))}
    </div>
  );
}