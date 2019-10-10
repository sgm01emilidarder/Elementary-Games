function validateCamps(nom, llançament, pegi, desenvolupador, genere) {
  if (nom === '' || llançament === '' || pegi === '' || desenvolupador === '' || genere === '') {
    alert('Es necesario rellenar todos los campos del formulario');
    return false;
  } else {
    return true;
  };
};

function validateDate(date) {
  if (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(date)) {
    return true;
  } else {
    alert('La fecha que has introducido no es válida');
    return false;
  };
};

function validatePegi(pegi) {
  if (pegi === 3 || pegi === 7 || pegi === 12 || pegi === 16 || pegi === 18) {
    return true;
  } else {
    alert('La edad que has introducido no es válida');
    return false;
  };
};

function checkDuplicateGame(pMap, pNom) {
  if (pMap === pNom) {
    alert("el juego seleccionado ya esta inscrito en el torneo");
    return false;
  } else {
    return true;
  };
};
