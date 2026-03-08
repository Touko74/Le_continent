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
    activity: "Randonnée au Mont Ngaoundéré",
    dish: "Sauce foléré",
    images: {
      capital: "/assets/regions/adamaoua/ngaoundere.jpg",
      activity: "/assets/regions/adamaoua/montagne.jpg",
      dish: "/assets/regions/adamaoua/sauce_folere.jpg"
    }
  },

  {
    name: "Centre",
    capital: "Yaoundé",
    activity: "Visite du musée national",
    dish: "Okok",
    images: {
      capital: "/assets/regions/centre/yde.jpg",
      activity: "/assets/regions/centre/musee.jpg",
      dish: "/assets/regions/centre/okok.png"
    }
  },

  {
    name: "Est",
    capital: "Bertoua",
    activity: "Visite de la réserve naturelle",
    dish: "Mbole",
    images: {
      capital: "/assets/regions/est/bertoua.jpg",
      activity: "/assets/regions/est/reserve.jpg",
      dish: "/assets/regions/est/mbol.jpeg"
    }
  },

  {
    name: "Littoral",
    capital: "Douala",
    activity: "Détente à la plage",
    dish: "Ndolé",
    images: {
      capital: "/assets/regions/littoral/douala.jpeg",
      activity: "/assets/regions/littoral/plage.jpeg",
      dish: "/assets/regions/littoral/ndole.jpeg"
    }
  },

  {
    name: "Nord-Ouest",
    capital: "Bamenda",
    activity: "Randonnée dans les montagnes",
    dish: "Eru",
    images: {
      capital: "/assets/regions/nord-ouest/bamenda.jpeg",
      activity: "/assets/regions/nord-ouest/rando.jpeg",
      dish: "/assets/regions/nord-ouest/eru.jpeg"
    }
  },

  {
    name: "Ouest",
    capital: "Bafoussam",
    activity: "Visite du palais royal",
    dish: "Taro sauce jaune",
    images: {
      capital: "/assets/regions/ouest/Bafoussam.jpeg",
      activity: "/assets/regions/ouest/palais.jpg",
      dish: "/assets/regions/ouest/taro.jpeg"
    }
  },

  {
    name: "Sud",
    capital: "Ebolowa",
    activity: "Découverte de la forêt équatoriale de Sangha",
    dish: "Lobé",
    images: {
      capital: "/assets/regions/sud/ebolowa.jpg",
      activity: "/assets/regions/sud/sangha.jpg",
      dish: "/assets/regions/sud/lobe.jpeg"
    }
  },

  {
    name: "Sud-Ouest",
    capital: "Buea",
    activity: "Ascension du Mont Cameroun",
    dish: "Poisson braisé",
    images: {
      capital: "/assets/regions/sud-ouest/buea.jpg",
      activity: "/assets/regions/sud-ouest/Mt_cameroun.png",
      dish: "/assets/regions/sud-ouest/soll-braise.jpeg"
    }
  }
];