



var pro ={refpro:1,nombrecomun:'primperan',composicion:'Metoclopramida',laboratorio:'Sanofi',preciocompra:3.74,precioventa:3.87,unidades:9};
var pro2 ={refpro:2,nombrecomun:'ibuprofeno',composicion:'ibuprofeno',laboratorio:'Piffer',preciocompra:5.74,precioventa:6.87,unidades:3};
var pro3 ={refpro:3,nombrecomun:'fosrenol',composicion:'lantano',laboratorio:'shire',preciocompra:6.74,precioventa:9.87,unidades:45};
var pro4 ={refpro:4,nombrecomun:'finasterina',composicion:'finasterida',laboratorio:'Piffer',preciocompra:13.74,precioventa:23.87,unidades:14};


var productos =[pro,pro2,pro3,pro4];

function compras (){
    
    document.getElementById("f1").style.visibility = "hidden";
    document.getElementById("f2").style.visibility = "visible";

var pedro={refpro:5,nombrecomun:'finasterina',composicion:'finasterida',laboratorio:'Piffer',preciocompra:13.74,precioventa:23.87,unidades:14};



productos.push(pedro);


alert("añadido");




}

function visualizar (){

for ( i = 0; i < productos.length; i++) {
    
    document.write(productos[i].refpro+" "+productos[i].nombrecomun+" "+productos[i].composicion+" "+productos[i].laboratorio+" "+productos[i].preciocompra+" "+productos[i].precioventa+" "+productos[i].unidades+"</br>");
    
}


}