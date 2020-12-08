function durée(date1,date2) { //fonction qui calcul la durée du séjour
    var date1 = new Date(date1)
    var date2 = new Date(date2)
    // différence des heures
    var diff = date2.getTime() - date1.getTime();
    // différence de jours
    var Diff = diff / (1000 * 3600 * 24);
    // afficher la différence
    return (Diff+1) 
}

// Les Destinations :
var Destination = ["bresil", "france", "italie", "japon", "safari", "usa"];


  //fonction qui calcule le prix total du séjour
  function prix() {
    var Tarif = [1999.99,1999.99,2599.99,2299.99,2599.99,1999.99];
    let id = new URLSearchParams(window.location.search).get("id");
    let enfant = new URLSearchParams(window.location.search).get("NBenfants");
    let adulte = new URLSearchParams(window.location.search).get("NBadultes");
    let départ = new URLSearchParams(window.location.search).get("DateDep");
    let retour = new URLSearchParams(window.location.search).get("DateRet");
    let dej = new URLSearchParams(window.location.search).get("Pdej");
    if (dej=='NonDej') {
        return (Tarif[id] * adulte + Tarif[id] * 0.6 * enfant) * durée(départ,retour)
    }
    if (dej=='OuiDej') {
        return (Tarif[id] * adulte + Tarif[id] * 0.6 * enfant + 12) * durée(départ,retour)
    }
}


//fonction qui reccupère les informations envoyées dans le formulaire pour les restituer dans un tableau recapitulatif
function recap() {
    let nom = new URLSearchParams(window.location.search).get("Nom");
    let prénom = new URLSearchParams(window.location.search).get("Prenom");
    let email = new URLSearchParams(window.location.search).get("Mail");
    let phone = new URLSearchParams(window.location.search).get("Telephone");
    let enfant = new URLSearchParams(window.location.search).get("NBenfants");
    let adulte = new URLSearchParams(window.location.search).get("NBadultes");
    let départ = new URLSearchParams(window.location.search).get("DateDep");
    let retour = new URLSearchParams(window.location.search).get("DateRet");
    let dej = new URLSearchParams(window.location.search).get("Pdej");
    let animaux = new URLSearchParams(window.location.search).get("Animaux");
    document.getElementById("Nom").innerHTML = ''+ nom;
    document.getElementById("Prenom").innerHTML = ''+ prénom;
    document.getElementById("Mail").innerHTML =  ' ' + email;
    document.getElementById("Telephone").innerHTML = ' ' + phone;
    document.getElementById("NBenfants").innerHTML =  ' ' + enfant;
    document.getElementById("NBadultes").innerHTML =  ' ' + adulte;
    document.getElementById("DateDep").innerHTML = ' ' + départ;
    document.getElementById("DateRet").innerHTML =  ' ' + retour;
    document.getElementById("Pdej").innerHTML =  ' ' +  dej;
    document.getElementById("Animaux").innerHTML =  ' ' + animaux;

    if (dej=='NonDej') {
        document.getElementById("Pdej").innerHTML = "Sans Petit Déjeuner"
    }
    if (dej=='OuiDej') {
        document.getElementById("Pdej").innerHTML = "Avec Petit Déjeuner"
    }
    document.getElementById("prix").innerHTML =  prix() +"€";  
}





