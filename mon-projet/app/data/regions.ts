export interface Region {
  name: string;
  capital: string;
  activity: string;
  dish: string;
  images: {
    capital: string;
    activity: string;
    dish: string;
  };
}

export const regions: Region[] = [
  {
    name: "Adamaoua",
    capital: "Ngaoundéré",
    activity: "Randonnée dans les montagnes du Mont Ngaouha",
    dish: "Sauce foléré",
    images: {
      capital: "/assets/regions/adamaoua/adamaoua_ngaounderet.jpg",
      activity: "/assets/regions/adamaoua/adamaoua_montnganhajpg.jpg",
      dish: "/assets/regions/adamaoua/adamaoua_saucefolere.jpg"
    }
  },

  {
    name: "Extrême-Nord",
    capital: "Maroua",
    activity: "Visite du Parc National de Waza",
    dish: "Viande Kilishi",
    images: {
      capital: "/assets/regions/extreme-nord/extremenord_maroua.jpg",
      activity: "/assets/regions/extreme-nord/extremenord_parcwazajpg.jpg",
      dish: "/assets/regions/extreme-nord/extremenord_Kilishi.jpg"
    }
  },

  {
    name: "Nord",
    capital: "Garoua",
    activity: "Visite du Parc National de Bouba Ndjida",
    dish: "Fufu gombo",
    images: {
      capital: "/assets/regions/nord/nord_garoua.jpg",
      activity: "/assets/regions/nord/nord-Bouba_Njida.jpg",
      dish: "/assets/regions/nord/nord-fufugombojpg.jpg"
    }
  }
];