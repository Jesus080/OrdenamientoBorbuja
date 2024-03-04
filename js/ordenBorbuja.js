/*function bubble() {
    var inputElement = document.getElementById("inputNumbers");
    var n = inputElement.value.split(',').map(Number);
    var v = n.slice();  // Crear una copia del arreglo original
  
    for (var i = 0; i < v.length - 1; i++) {
      for (var j = 0; j < v.length - 1 - i; j++) {
        if (v[j] > v[j + 1]) {
          
          var aux = v[j];
          v[j] = v[j + 1];
          v[j + 1] = aux;
        }
      }
    }
  
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Arreglo original: " + n.join(', ') + "<br>" +
                              "Arreglo ordenado: " + v.join(', ');
  }
  
  */
  function bubble() {
    var inputElement = document.getElementById("inputNumbers");
    var orderTypeElement = document.getElementById("orderType");
    var n = inputElement.value.split(',').map(Number);
    var v = n.slice();  // Crear una copia del arreglo original
    var orderType = orderTypeElement.value;
    if (orderType =="noSelec"){
      alert("Seleccion Orden ")
    }
    for (var i = 0; i < v.length - 1; i++) {
      for (var j = 0; j < v.length - 1 - i; j++) {
        var asdOdesc = (orderType === "asc" && v[j] > v[j + 1]) || (orderType === "desc" && v[j] < v[j + 1]);
          if (asdOdesc) {
          var aux = v[j];
          v[j] = v[j + 1];
          v[j + 1] = aux;
        }
      }
    }

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Arreglo original: " + n.join(', ') + "<br>" +
                              "Arreglo ordenado: " + v.join(', ');
  }