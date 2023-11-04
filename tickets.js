//Deberán replicar la siguiente sección 
//(es una sección que se debe agregar al integrador front-End) al presionar en el enlace “tickets”.

//Deberá contener la funcionalidad en Javascript, 
//al momento de presionar el botón “Resumen”,
// deberá mostrar en la sección “Total a Pagar: $”,
// el monto correspondiente a la cantidad de tickets a comprar
// con el descuento correspondiente dependiendo la categoría seleccionada,
// existen 3 categorías, Estudiante, Trainee, Junior

function btnResumen(){
    
    let cantidad = document.getElementById("cantidad").value;
    let categoria = document.getElementById("categoria").value;
    
    if(cantidad === NaN){
        alert("introduzca un valor numerico por favor");
    }


    let valorTickets = 200;

    let cantidadTickets = valorTickets * cantidad;

    let porcentaje = 0;
    
    console.log("categoria", categoria);
    
    switch (categoria) {
    case "1":
        porcentaje = 0.20;
        break;
    case "2":
        porcentaje = 0.50;
        break;
    case "3":
        porcentaje = 0.85;
        break;
   }

   let total = cantidadTickets * porcentaje;
   console.log(total);

   document.getElementById("resultado").innerHTML = "Total a pagar: $  " +  total;

   
}

function btnEliminar(){

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").value = 0;
    document.getElementById("resultado").innerHTML = 0;
}