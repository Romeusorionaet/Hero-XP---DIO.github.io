// Lista de heróis com nome e XP
let herois = [
  { nome: "Merlin", xp: 800 },
  { nome: "Athena", xp: 1500 },
  { nome: "Zara", xp: 5300 },
  { nome: "Kael", xp: 7500 },
  { nome: "Gato de Botas", xp: 11000 },
];

// Função para classificar o nível do herói
function classificarNivel(xp) {
  if (xp < 1000) return "Ferro";
  else if (xp <= 2000) return "Bronze";
  else if (xp <= 5000) return "Prata";
  else if (xp <= 7000) return "Ouro";
  else if (xp <= 8000) return "Platina";
  else if (xp <= 9000) return "Ascendente";
  else if (xp <= 10000) return "Imortal";
  else return "Radiante";
}

// Função principal para mostrar o nível na tela
function mostrarNivel() {
  const select = document.getElementById("heroiSelect");
  const nomeEscolhido = select.value;

  const resultado = document.getElementById("resultado");

  if (!nomeEscolhido) {
    resultado.textContent = "Selecione um herói.";
    return;
  }

  for (let i = 0; i < herois.length; i++) {
    if (herois[i].nome === nomeEscolhido) {
      let xp = herois[i].xp;
      let nivel = classificarNivel(xp);
      resultado.textContent = `O Herói de nome ${nomeEscolhido} está no nível de ${nivel} com ${xp} de experiência.`;
      return;
    }
  }

  resultado.textContent = "Herói não encontrado.";
}
