const map = L.map('map').setView([-19.9193, -43.9997], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Carrega marcadores do JSON
fetch('locais.json')
  .then(response => response.json())
  .then(locais => {
    locais.forEach(local => {
      L.marker(local.coords)
        .addTo(map)
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
    filterBox.innerHTML = "<div class='filterbar'>FUI CLICADO </div>"
    
    alert('mensagem aleatoria');
    map._panes.markerPane.remove(); //aqui alterei para apagar
  }
const searchbar = document.getElementById("searchbar");
  searchbar.addEventListener("input", function(){
    const digitado = this.value;
    console.log(digitado);
    if(digitado){
      const localEncontrado = locais.find(local => locais.json === digitado);

if (localEncontrado) {
  console.log("Local encontrado:", localEncontrado);
} else {
  console.log("Local não encontrado");
}
      fetch('locais.json')
        .then(response => response.json())
        .then(locais => {
        locais.forEach(local => {
          L.marker(local.coords)
          .addTo(map)
          .bindPopup(local.nome);
        });
      })
      Filtrode(digitado);
    }else{
      mostretudo
    }
  })

