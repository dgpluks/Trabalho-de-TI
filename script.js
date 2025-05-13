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
var filtro = ''



const botaoFiltro = document.getElementById("filtro");

    const bot1 = document.getElementById("Predio");
    const bot2 = document.getElementById("Alimentacao");
    const bot3 = document.getElementById("entretenimento");
    const bot4 = document.getElementById("ajuda");
    const box = document.getElementById("box");


  botaoFiltro.onclick = function () {
    const filterBox = document.getElementById("box");
    if(box.style.display === "block"){
      box.style.display = "none"
    }else{
      box.style.display = "block"
    }
    
  
  }
  
  
  
  bot1.addEventListener("click", async function(){
    filtro = "Predio";
    await buscarFiltro ()
  })
  bot2.addEventListener("click", async function(){
    filtro = "Alimentacao";
    await buscarFiltro ()
  })
  bot3.addEventListener("click", async function(){
    filtro = "entretenimento";
    await buscarFiltro ()
  })
  bot4.addEventListener("click", async function(){
    filtro = "ajuda";
    await buscarFiltro ()
  })

  async function buscarFiltro (){
    const data = await fetch('locais.json')
    const locais = await data.json()
    GrupoDeMarcadores.clearLayers()
    const localEncontrado = locais.filter( local => local.filtro  === filtro);
    localEncontrado.forEach((local)=>{
      
      L.marker(local.coords)
      .addTo(GrupoDeMarcadores)
      .bindPopup(local.nome);
    })
  }
  














  

  var digitado = '';


  async function buscarLocal (){
        const data = await fetch('locais.json')
        const locais = await data.json()
        console.log("dada", locais)
     

        const localEncontrado = locais.find( local => local.nome  === digitado);
      console.log(localEncontrado)
      if(digitado===''){
        GrupoDeMarcadores.clearLayers()

        locais.forEach(local => {
          L.marker(local.coords)
          .addTo(GrupoDeMarcadores)
          .bindPopup(local.nome);
        });
      }else if (localEncontrado) {
        GrupoDeMarcadores.clearLayers()
        console.log("Local encontrado:", localEncontrado);
        L.marker(localEncontrado.coords)
        .addTo(GrupoDeMarcadores)
        .bindPopup(localEncontrado.nome);
      }else{
        alert('Local inexistente, escreva utilizando letras maiusculas no inicio de cada palavra e respeitando acentos')
        GrupoDeMarcadores.clearLayers()
        
      }
  }

  const searchbar = document.getElementById("searchbar");
  const OKbutton = document.getElementById('ok');
  OKbutton.addEventListener("click", async function(){
    await buscarLocal()
    
  })

  searchbar.addEventListener("input", async function(e){
    digitado = e.target.value;
  })