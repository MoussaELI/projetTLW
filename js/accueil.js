window.onload=function(event){
  
    let x = ""
    tableau.forEach(d => {
      x += creeDest(d)
    })
    let elem = document.getElementById("dests")
    elem.innerHTML = x 
  }
  
  //fonction qui affiche la météo en directe de n'importe quelle ville
  function meteo(ville) {
    window.fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=20905c97572f69f2241911d061bdcb68&units=metric&lang=fr`)
      .then(res =>res.json())
      .then(resJson => {
        document.getElementById(`meteo-${ville}`).innerHTML = resJson.main.temp
      })
    }
  
  
  //fonction ittérative qui affiche une par une nos destinations sur la page d'accueil avec des images et la température
  function creeDest(dest) {
  
    meteo(dest.ville)
  
    return `
    
    <a href="reservation.html?id=${dest.id}">
    
    <h2>${dest.dest} </h2>
    <p>La température à ${dest.ville} en °C est de :</p>
    <div id="meteo-${dest.ville}" class="meteo">Température</div>
    <br>
    
    <div id="slideshow-${dest.dest}">
    <div class="slideshow-container">
    
    <div class="mySlidesFade">
    <div class="numbertext">1 / 3</div>
    <img src="${dest.image1}" style="width:100%" alt="images illustrant le séjour">
    <div class="text">${dest.phrase} à partir de ${dest.prix} euros !</div>
    </div>
    
    <div class="mySlidesFade" style="display: none;">
    <div class="numbertext">2 / 3</div>
    <img src="${dest.image2}" style="width:100%" alt="images illustrant le séjour">
    <div class="text">${dest.phrase} à partir de ${dest.prix} euros !</div>
    </div>
    
    <div class="mySlidesFade" style="display: none;">
    <div class="numbertext">3 / 3</div>
    <img src="${dest.image3}" style="width:100%" alt="images illustrant le séjour">
    <div class="text">${dest.phrase} à partir de ${dest.prix} euros !</div>
    </div>
    
    <!-- Next and previous buttons -->
    <a class="prev" onclick="plusSlides('slideshow-${dest.dest}', -1)">&#10094;</a>
    <a class="next" onclick="plusSlides('slideshow-${dest.dest}', 1)">&#10095;</a>
    </div>
    <br>
  
  
    
    <!-- The dots/circles -->
    <div style="text-align:center">
    <span class="dot active" onclick="currentSlide('slideshow-${dest.dest}', 0)"></span>
    <span class="dot" onclick="currentSlide('slideshow-${dest.dest}', 1)"></span>
    <span class="dot" onclick="currentSlide('slideshow-${dest.dest}', 2)"></span>
    </div>
    </div>
    
    
    
    
    </a>
    
    `
  }