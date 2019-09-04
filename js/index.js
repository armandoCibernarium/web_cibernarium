/*VALIDACIÓ DEL FORMULARI*/
/*detectem l'event del "click" del botó del formulari*/
/*funció de validació*/
function validar(){
  /*desem a una variable el valor del primer "input" (nom)*/
  /*agafem el atribut "value" del input mitjançant el DOM(Model Object Document)*/
  var nom = document.getElementById('nom').value;
  /*control del contingut del input amb id "nom"*/
  if(nom == ""){
    alert("el camp nom és buit");
  }


}
