class Destination { //création de la classe destination regroupant toutes les infos propres à chaque destinations.
    constructor(
      id,
      dest,
      prix,
      phrase,
      txt,
      meteo,
      image1,
      image2,
      image3,
      ville
    ) {
      this.id = id;
      this.dest = dest;
      this.prix = prix;
      this.phrase = phrase;
      this.txt = txt;
      this.meteo = meteo;
      this.image1 = image1;
      this.image2 = image2;
      this.image3 = image3;
      this.ville = ville;
    }
  }
  
  let bresil = new Destination(
    0,
    "Bresil",
    1999.99,
    "Venez danser sur les plages de Rio de Janeiro ",
    "tb",
    10,
    "../images/rio1.jpeg",
    "../images/rio2.jpeg",
    "../images/rio3.jpeg",
    "Rio"
  );
  let france = new Destination(
    1,
    "France",
    1999.99,
    "Contemplez la sublime capitale de la mode au sommet de la Tour Eiffel ",
    "tb",
    10,
    "../images/france1.jpeg",
    "../images/france2.jpeg",
    "../images/france3.jpeg",
    "Paris"
  );
  let italie = new Destination(
    2,
    "Italie",
    2599.99,
    "Envolez vous pour Venise et son atmosphère romantique ",
    "ti",
    30,
    "../images/italie1.jpeg",
    "../images/italie2.jpeg",
    "../images/italie3.jpeg",
    "Venise"
  );
  let japon = new Destination(
    3,
    "Japon",
    2299.99,
    "Découvrez l'authenticité de Tokyo et sa culture ",
    "tj",
    40,
    "../images/japon1.jpeg",
    "../images/japon2.jpeg",
    "../images/japon3.jpeg",
    "Tokyo"
  );
  let safari = new Destination(
    4,
    "Safari",
    2599.99,
    "Partez en safari ",
    "ts",
    50,
    "../images/safari1.jpeg",
    "../images/safari2.jpeg",
    "../images/safari3.jpeg",
    "Johannesburg"
  );
  let usa = new Destination(
    5,
    "USA",
    1999.99,
    "Time square et l'immensité de la ville de New-York vous attendent ",
    "tu",
    60,
    "../images/usa1.jpeg",
    "../images/usa2.jpeg",
    "../images/usa3.jpeg",
    "New York"
  );
  
  var tableau = [bresil, france, italie, japon, safari, usa];