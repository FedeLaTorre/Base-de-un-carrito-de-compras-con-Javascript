var d = document;
var c = console.log;

var productos = d.getElementById("productos");

c(productos);
var prod = [
    {
        Nombre: "Velador Americano",
        Precio: 300,
        Imagen: "items/velador_1.jpg",
        Descripción: "Velador estilo Americano"

    },
    {
        Nombre: "Velador Circular",
        Precio: 350,
        Imagen: "items/velador_2.jpg",
        Descripción: "Velador estilo Circular"

    },
    {
        Nombre: "Velador de Cobre",
        Precio: 250,
        Imagen: "items/velador_3.jpg",
        Descripción: "Velador estilo de Cobre"

    },
    {
        Nombre: "Velador de Cristal",
        Precio: 400,
        Imagen: "items/velador_4.jpg",
        Descripción: "Velador estilo Cristal"

    }

]
c(prod, prod[0].Precio);
var contador = 0;
var acumulador = 0;
c(contador);
for (var i = 0; i < prod.length; i++) {
    var div = d.createElement("div");
    productos.appendChild(div);
    var img = d.createElement("img");
    div.appendChild(img);
    img.src = prod[i].Imagen;
    img.alt = prod[i].Nombre;
    var div2 = d.createElement("div");
    var h3 = d.createElement("h3")
    h3.innerHTML = prod[i].Nombre;
    div.appendChild(div2);
    div2.appendChild(h3);
    c(div2);
    var p = d.createElement("p");
    var span = d.createElement("span");
    p.innerHTML = "Precio: ";
    div2.appendChild(p);
    span.innerHTML = "$ " + prod[i].Precio;
    var prec = prod[i].Precio;
    c(prec);
    p.appendChild(span);
    var button = d.createElement("button");
    button.innerHTML = "Agregar";
    button.dataset.indice = i
    div2.appendChild(button);
    button.onclick = Boton
}


var asd22 = productos.getElementsByTagName("span");
c(asd22.valueOf(), prod[0].Precio);

function Boton(evento) {

    contador++;
    var button = evento.target;
    var indice = button.dataset.indice;
    acumulador += prod[indice].Precio;

    p3.innerHTML = "Total a pagar $ " + acumulador;
    p2.innerHTML = "Items agregados " + " " + contador;
    c(contador);
}

c(contador);
var header = d.querySelector("header");
var div3 = d.createElement("div");
header.appendChild(div3);
var p2 = d.createElement("p");
div3.appendChild(p2);
p2.innerHTML = "Items agregados 0 ";
var p3 = d.createElement("p");
div3.appendChild(p3);
p3.innerHTML = "Total a pagar $0";
var but2 = d.createElement("button")
but2.innerHTML = "Agregar";
div3.appendChild(but2);
