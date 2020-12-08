window.addEventListener('load', function() {

    window.addEventListener('scroll', function() {
      // quand on descend de 20 px cela affiche le boutton retour en haut de page
      scrollFunction();
  
      var navi=document.getElementById('navi');
      if ((window.pageYOffset || document.documentElement.scrollTop) > 10) {
        navi.classList.add('scrolled');
      } else {
        navi.classList.remove('scrolled');
      }
    });
    
    
    mybutton = document.getElementById("myBtn");
  });
  
  //cette fonction permet de gérer le retour en haut de page via un boutton
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  //cette fonction permet de gérer le retour en haut de page via un boutton
  function topFunction() {
    document.documentElement.scrollTop = 0; // pour Chrome, Firefox, IE et Opera
  } 
  

  //fonction pour se connecter à son espace privé
function connectfade(){
    if (document.getElementById('meconnecter').style.display ==='none'){
        document.getElementById('connectchev').className='fa fa-chevron-left';
        document.getElementById('meconnecter').style.display = 'block';
        document.getElementById('registerchev').className='fa fa-chevron-right';
        document.getElementById('minscrire').style.display='none';
        if(document.getElementById('registerSuccess')){
            document.getElementById('registerSuccess').style.display='none';
        }
  
    } else{
        document.getElementById('connectchev').className='fa fa-chevron-right';
        document.getElementById('meconnecter').style.display = 'none';
        if(document.getElementById('registerSuccess')){
            document.getElementById('registerSuccess').style.display='none';
        }
    }
  }
  
  //fonction pour enregistrer son espace privé
  function registerfade(){
    if (document.getElementById('minscrire').style.display ==='none'){
        document.getElementById('registerchev').className='fa fa-chevron-left';
        document.getElementById('minscrire').style.display = 'block';
        document.getElementById('connectchev').className='fa fa-chevron-right';
        document.getElementById('meconnecter').style.display='none';
        if(document.getElementById('registerSuccess')){
            document.getElementById('registerSuccess').style.display='none';
        }
  
    } else{
        document.getElementById('registerchev').className='fa fa-chevron-right';
        document.getElementById('minscrire').style.display = 'none';
        if(document.getElementById('registerSuccess')){
            document.getElementById('registerSuccess').style.display='none';
        }
    }
  }
  function connect() { //on change l'icone, On affiche le fade div et le formulaire
    if (formulaires.style.display === 'none') {
        usericon.className = 'fa fa-user';
        document.getElementById('player').style.display='block';
        formulaires.style.display = 'block';
        userbutton.style.fontSize = '24px';
        fade.style.display = 'block';
    } else {
        usericon.className = 'fa fa-user-o';
        document.getElementById('player').style.display='none';
        formulaires.style.display = 'none';
        userbutton.style.fontSize = '20px';
        fade.style.display = 'none';
    }
  }
  
  //fonction pour s'inscrire
  function registertest(){
    if(document.getElementById('firstPass').value==document.getElementById('confirmPass').value && document.getElementById('registerid').value!=localStorage.getItem('pseudo')){
        localStorage.setItem('password',document.getElementById('firstPass').value);
        localStorage.setItem('pseudo',document.getElementById('registerid').value);
        document.getElementById('minscrire').style.display='none';
        newspan.innerHTML="Vous vous etes bien incrit, veuillez vous connecter.";
        newdiv.append(newspan)
        newdiv.setAttribute('id','registerSuccess');
        newdiv.display='block';
        document.getElementById('formcontent').append(newdiv);
    } else if(document.getElementById('registerid').value==localStorage.getItem('pseudo')){
        alert('Vous êtes déjà inscrit sous ce pseudo');
    } else{
        alert('veuillez entrer deux fois le même mot de passe');
    }
  }
  
  //fonction pour se connecter avec la nouvelle inscription
  function connecttest(){
    if (document.getElementById('connectid').value==localStorage.getItem('pseudo') && document.getElementById('connectpwd').value==localStorage.getItem('password')){
        sessionStorage.setItem('isConnected','true');
        document.getElementById('formcontent').style.display='none';
        newh1.setAttribute('style','text-align:center;');
        newh1.innerHTML="Bienvenue, "+document.getElementById('connectid').value+" !";
        document.getElementById('formulaires').append(newh1);
        newa.innerHTML='Déconnexion';
        newa.id="disconnectlink";
        newa.setAttribute('onclick','deco()');
        document.getElementById('formulaires').append(newa);
    } else{
        alert('Désolé, le mot de passe ou le pseudo rentré est invalide');
    }
  }
  
  //est ce qu'on est bien connecté ?
  function isConnected(){
    if(sessionStorage.getItem('isConnected')==='true'){
        document.getElementById('formcontent').style.display='none';
        newh1.setAttribute('style','text-align:center;');
        newh1.innerHTML="Bienvenue, "+localStorage.getItem('pseudo')+" !";
        document.getElementById('formulaires').append(newh1);
        newa.innerHTML='Déconnexion';
        newa.id="disconnectlink";
        newa.setAttribute('onclick','deco()');
        document.getElementById('formulaires').append(newa);
    }
  }
  isConnected();
  function disconnect() { //On enlève le fade div et on remet tout en ordre
    usericon.className = 'fa fa-user-o';
    document.getElementById('player').style.display='none';
    formulaires.style.display = 'none';
    fade.style.display = 'none';
    userbutton.style.fontSize = '20px';
  }
  

  //fonction pour afficher la map
function initMap() {
    var location={lat:45.764042, lng:4.835659};
    var map = new google.maps.Map(document.getElementById("map"),{
      zoom:10,
      center:location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    })
  }