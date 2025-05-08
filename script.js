const map = L.map('map').setView([-19.9193, -43.9997], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const GrupoDeMarcadores = L.layerGroup().addTo(map);

// Carrega marcadores do JSON
fetch('locais.json')
  .then(response => response.json())
  .then(locais => {
    locais.forEach(local => {
      L.marker(local.coords)
        .addTo(GrupoDeMarcadores)
        .bindPopup(local.nome);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar os locais:', error);
  });

// Ícones mudam de cor ao clicar
document.querySelectorAll('.icons i').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('active');
  });
});




const botaoFiltro = document.getElementById("filtro");

  botaoFiltro.onclick = function () {
    const filterBox = document.getElementById("box");
    filterBox.innerHTML = "<div ><button class='filtro'>PRÉDIOS</button></div>"
    filterBox.innerHTML += "<div ><button class='filtro'>Alimentação</button></div>"
    filterBox.innerHTML += "<div ><button class='filtro'>Entretenimento</button></div>"
    
    alert('mensagem aleatoria');
  }
  





const searchbar = document.getElementById("searchbar");
  searchbar.addEventListener("input", async function(){
    const digitado = this.value;
    console.log(digitado);
    if(digitado){

      
      const data = await fetch('locais.json')
      const locais = await data.json()
      const localEncontrado = locais.find( local => local.nome  === digitado);



      console.log(locais);

      if (localEncontrado) {
        GrupoDeMarcadores.clearLayers()
        console.log("Local encontrado:", localEncontrado);
        L.marker(localEncontrado.coords)
        .addTo(GrupoDeMarcadores)
        .bindPopup(localEncontrado.nome);
      }else{
        alert('Local inexistente, escreva utilizando letras maiusculas no inicio de cada palavra e respeitando acentos')
        GrupoDeMarcadores.clearLayers()
        
      }
           
    }else{
      mostretudo
    }
  })

