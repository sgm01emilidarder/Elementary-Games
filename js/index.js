let firstMap = new Map();
function doMapWork(){
  let nom = document.getElementById('nom');
  let llançament = document.getElementById('llançament');
  let pegi = document.getElementById('pegi');
  let desenvolupador = document.getElementById('desenvolupador');
  let genere = document.getElementById('genere');
  firstMap.set(firstMap.size + 1, { "nom":nom.value, "llançament": llançament.value, "pegi": pegi.value, "desenvolupador": desenvolupador.value });
  for(let r of firstMap.entries())
  console.log(`${r[0]}: ${r[1].nom}`);
  console.log(nom.value, llançament.value, pegi.value, desenvolupador.value);
};
