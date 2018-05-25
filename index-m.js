function Calcular(){
  var importe = parseInt($("#importe").val());
  var interes = parseInt($("#t-interes").val());

  var total = importe + ((interes * importe)/100);
  // Asumo 12 cuotas para todos los prestamos debido a que no se considera en el ejercicio.
  var cuota = total / 12;

  $("#total").val(total);
  $("#cuota-m").val(cuota);
  console.log(cuota);
}

function Borrar(){
  $("#importe").val("");
  $("#t-interes").val("");
  $("#total").val("");
  $("#cuota-m").val("");
  $("#select-prov").val("");
}

$(document).ready(function() {

    $.getJSON("https://api.myjson.com/bins/701gi", function(json) {
      json.forEach(function(obj){
          var option = "<option value=" + obj.state + ">" + obj.state + "</option>";

          $("#select-prov").append(option);
      });
    });


    $('#calcular').click(function(){
       Calcular();
     });

    $('#borrar').click(function(){
      Borrar();
    });
 });

