precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let sumar = document.querySelector("#sumar");
let restar = document.querySelector("#restar");

sumar.addEventListener ("click",()=>{
    let cantidadInicial = document.querySelector(".cantidad");
    let valor = cantidadInicial.innerHTML;
    cantidadInicial.innerHTML = parseInt(valor) + 1;
    let total = document.querySelector(".valor-total");
    total.innerHTML = parseInt(cantidadInicial.innerHTML) * precio;
});

restar.addEventListener ("click",()=>{
    let cantidadInicial = document.querySelector(".cantidad");
    let valor = cantidadInicial.innerHTML;
    cantidadInicial.innerHTML = parseInt(valor) - 1;
    if (valor>0){
        let total = document.querySelector(".valor-total");
        total.innerHTML = parseInt(cantidadInicial.innerHTML) * precio;
    }else{
        cantidadInicial.innerHTML = 0
        alert("STOP!!!!!!!")
    }
});

