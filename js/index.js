function validateCamps(nom, llançament, pegi, desenvolupador, genere) {
  if (nom === '' || llançament === '' || pegi === '' || desenvolupador === '' || genere === '') {
    message('Es necesario rellenar todos los campos del formulario');
    return false;
  } else {
    return true;
  };
};

function validatePegi(pPegi) {
  if (pPegi > 18) {
    message("El valor de pegi debe ser un numerico entre 0 y 18")
    return false;
  } else {
    return true;
  }
}

function checkDuplicateGame(pMap, pNom) {
  if (pMap === pNom) {
    message("el juego seleccionado ya esta inscrito en el torneo");
    return false;
  } else {
    return true;
  };
};
