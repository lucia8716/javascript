
in1.value=localStorage.getItem("in1");


var vas;
var mot;
var mod;
var rep;
var est;



var coche = {};
var coches=[coche];


//var vastidor=[];
//var motor=[];
//var modelo=[];
//var tiporeparacion=[];
//var estancia=[];
var w=0;
var y=0;
var filter6=/^([0-9])*$/;
var filter7=/^([a-zA-Z])*$/;
var ver=new boolean(true);
var vermotor=new boolean(true);
var vermodelo=new boolean(true);
var vertiporeparacion=new boolean(true);
var verestancia=new boolean(true);
var numeromodificar=0;


var valmodificartipo1=new boolean(false);
var valmodificartipo2=new boolean(false);





function llamada (){//esta parte controla el numero de bastidor

vas=document.getElementById("in2").value;



                       
                       ver=filter6.test(vas);
                        
                        if(ver==true&&vas.length==12){
                                                    
                          w++;
                          

                          
                                
                        }
                        else{
                                alert("Debes introducir un numero de vastidor válido");
                                w=0;
                                document.getElementById("in2").value="";
                                document.getElementById("in2").focus();
                                
                        }



if(y==0&&w>0){

alert("Nuevo usuario, bienvenido");
y++;
coche.bastidor=vas;

coches.push({bastidor:vas});
alert(coches[0].bastidor);

document.getElementById("entradas").style.visibility = "visible"; 
in3.value=in2.value;

}else{

if (w>1) {
coche.vastidor.push(vas);

for (var i = 1; i<vastidor.length; i++) {
    if (vas==vastidor[i-1].trim()) {alert("Coche ya esta registrado en la bbdd, modificar campos"); 
    document.getElementById("modificar").style.visibility = "visible";
    document.getElementById("entradas").style.visibility = "hidden"; 

       in12.value=coche.vastidor[i-1];
       in8.value=coche.motor[i-1];
       in9.value=coche.modelo[i-1];
       in10.value=coche.tiporeparacion[i-1];
       in11.value=coche.estancia[i-1];
       numeromodificar=i-1;
       i=coche.vastidor.length;
       coche.vastidor.splice(i-1);

    
       
} else {if(i==coche.vastidor.length-1){

alert("Entrada nueva");
in3.value=in2.value;
document.getElementById("entradas").style.visibility = "visible"; 
}
}
}
}
}
window.reload();
}


function resmotor(){// controla si es diesel y gasolina
    mot=document.getElementById("in4").value;
    mot=mot.toLowerCase();
    vermotor=filter7.test(mot);
    alert(mot);
                        
                        if((vermotor==true)&&((mot=="diesel")||(mot=="gasolina"))){
                                          
                            
                            coche.motor.push(mot);
                            
                               
                        }
                        else{
                                alert("Debes introducir si es diesel o gasolina");
                                document.getElementById("in4").value="";
                                document.getElementById("in4").focus();
                                
                        }
                    }

                    function resmodelo(){
    mod=document.getElementById("in5").value;
    mod=mod.toLowerCase();
    vermodelo=filter7.test(mod);
    
                        
                        if(vermodelo==true){
                                          
                            
                            coche.modelo.push(mod);
                               
                        }
                        else{
                                alert("Debes introducir un modelo de motor correcto");
                                document.getElementById("in5").value="";
                                document.getElementById("in5").focus();
                                
                        }
                    }


                    function resrepara(){
                        rep=document.getElementById("in6").value;
                        rep=rep.toLowerCase();
    vertiporeparacion=filter7.test(rep);
    
                        
                        if((vertiporeparacion==true)&&((rep=="chapa")||(rep=="pintura"))){
                                          
                            
                            coche.tiporeparacion.push(rep);
                               
                        }
                        else{
                                alert("Debes introducir si es una reparacion de chapa o pintura");
                                document.getElementById("in6").value="";
                                document.getElementById("in6").focus();
                                
                        }
                    }


                    function resestancia(){
                        est=document.getElementById("in7").value;
                        est=est.toLowerCase();
    verestancia=filter7.test(est);
    
                        
                        if((verestancia==true)&&((est=="si")||(est=="no"))){
                                          
                            
                            coche.estancia.push(est);
                               
                        }
                        else{
                                alert("Debes introducir si el coche esta en taller");
                                document.getElementById("in7").value="";
                                document.getElementById("in7").focus();
                                
                        }
                    }


function resalta(){

    alert("alta realizada correctamente");
    //falta comprobar que estan todos rellenos   
    
    
}

function modificartipo (){



if (tiporeparacion [numeromodificar]==in10.value) {

    alert("modificar el registro");
    document.getElementById("in10").value="";
    document.getElementById("in10").focus();

if((in10.value=="chapa")||(in10.value=="pintura")){
    document.getElementById("in10").value="";
    document.getElementById("in10").focus();

    
} 
}else{
    
    tiporeparacion [numeromodificar]==in10.value;
    
    valmodificartipo1=true;
}
}

function modificarestancia(){


if((in11.value!="si")&&(in11.value!="no")){
    document.getElementById("in11").value="";
    document.getElementById("in11").focus();
} 
else {

tiporeparacion [numeromodificar]=in11.value;

valmodificartipo2=true;

}
}
function modificaralta(){


if ((valmodificartipo2==true)&&(valmodificartipo1==true)) {
    alert("alta realizada la modificacion correctamente ");
    document.getElementById("modificar").style.visibility = "hidden";
    
} else {
    alert("no ha modificado los datos correctamente");
   


}

 }

function consulta (){


if (vastidor.length==0) {

    Document.write("No hay registros");
    alert("mario");
    
}



for (i = 0; i < vastidor.length; i++) {

if (tiporeparacion[i]=="chapa") {

Document.write("Numero de bastidor"+vastidor[i]+" "+"tipo de reparacion"+tiporeparacion[i]);


    
} else {

Document.write("Numero de bastidor"+vastidor[i]+" "+"tipo de reparacion"+tiporeparacion[i]);
    
}

    
    
}





}



function resalidas (){//no esta completo del todo


    document.getElementById("salidas").style.visibility = "visible"; 
    var a =document.getElementById("in18").value;
   var v=1;

for ( i = 0; i < vastidor.length; i++) {
    
if (a==vastidor[i]&&estancia[i]=="si"){

    estancia[i]="no";

    alert ("coche dado de salida")

    v=0;


}

if (v>0) { alert("no hay registros");
    
} else {
    
}


    
}



}


