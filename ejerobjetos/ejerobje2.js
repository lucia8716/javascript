
in1.value=localStorage.getItem("in1");


var vas;
var mot;
var mod;
var rep;var rep2;
var est;

var coches=[];


var vastidor=[];
var estancia=[];

var w=0;
var y=0;
var filter6=/^([0-9])*$/;
var filter7=/^([a-zA-Z])*$/;
var ver=new boolean(true);
var vermotor=new boolean(true);
var vermodelo=new boolean(true);
var vertiporeparacion=new boolean(true);
var vertiporeparacion2=new boolean(true);
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
vastidor.push(vas);
document.getElementById("entradas").style.visibility = "visible"; 
in3.value=in2.value;
estancia.push("si");



}else{

if (w>1) {

for (var i = 0; i<vastidor.length; i++) {

   
    if (vas==vastidor[i]&&estancia[i]=="si") {

        var alerta;
        do {
alerta=prompt("Coche ya esta registrado en el taller, desea moficar registro (escriba si o no)");
alerta=alerta.toLowerCase();
        }while(alerta!="si"&&alerta!="no");

if(alerta=="si"){

    document.getElementById("in12").value=coches[i].bastidor;
    document.getElementById("in8").value=coches[i].motor;
    document.getElementById("in9").value=coches[i].modelo;
    document.getElementById("in10").value=coches[i].tiporeparacion;
    i=vastidor.length;
document.getElementById("modificar").style.visibility = "visible"; 
}

if(alerta=="no"){

    alert("Esta volviendo a la pantalla inicial");
    i=vastidor.length;
    document.getElementById("in2").value="";
    document.getElementById("in2").focus();
}





} else {
vastidor.push(vas);
estancia.push("si");
alert("Entrada nueva");
in3.value=in2.value;
i=vastidor.length;
document.getElementById("entradas").style.visibility = "visible";

}
}
 

}
}

}


function resmotor(){// controla si es diesel y gasolina
    mot=document.getElementById("in4").value;
    mot=mot.toLowerCase();
    vermotor=filter7.test(mot);
    
                        
                        if((vermotor==true)&&((mot=="diesel")||(mot=="gasolina"))){
                                          
                            
                            
                            
                               
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
                                          
                            
                            
                               
                        }
                        else{
                                alert("Debes introducir si es una reparacion de chapa o pintura");
                                document.getElementById("in6").value="";
                                document.getElementById("in6").focus();
                                
                        }
                    }


                    function resrepara2(){
                        rep2=document.getElementById("in10").value;
                        rep2=rep2.toLowerCase();
    vertiporeparacion2=filter7.test(rep2);
    
                        
                        if((vertiporeparacion2==true)&&((rep2=="chapa")||(rep2=="pintura"))){
                                          
                            
                            
                               
                        }
                        else{
                                alert("Debes introducir si es una reparacion de chapa o pintura");
                                document.getElementById("in10").value="";
                                document.getElementById("in10").focus();
                                
                        }
                    }


                    


function resalta(){

    
      

    var coche={};
    var x1=document.getElementById("in3").value;
    var x2=document.getElementById("in4").value;
    var x3=document.getElementById("in5").value;
    var x4=document.getElementById("in6").value;
    var x5;
    
    coche.bastidor=x1;
    coche.motor=x2;
    coche.modelo=x3;
    coche.tiporeparacion=x4;
   
    for (var i = 0; i < vastidor.length; i++) {
        if (x1==vastidor[i]) {
            x5=estancia[i];
            i=vastidor.length;
        }
            }
    coche.estancia=x5;
    

        //validar campos de validacion con un for


        for ( bam = 0; bam < 1000; bam++) {
            
            if (x1!="") {

                alert("faltan campos por rellenar");
                
            }else{bam=1000;}
            
        }

    

    coches.push(coche);



    



    alert("alta realizada correctamente");
          document.getElementById("in3").value="";
          document.getElementById("in4").value="";
          document.getElementById("in5").value="";
          document.getElementById("in6").value="";
          document.getElementById("in2").value="";
          document.getElementById("in2").focus();
          document.getElementById("entradas").style.visibility = "hidden";
}

function modificartipo (){

var z=document.getElementById("in12").value;

var x1=document.getElementById("in10").value;
var x2;
var x3;
for ( i = 0; i < coches.length; i++) {
    if (z==coches[i].bastidor) {
        x2=coches[i].tiporeparacion;
        i=coches.length;
    }     
}

if (x1==x2||x1.length<1) {

    alert("no esta modicando regitro correctamente");
    document.getElementById("in10").value="";
    document.getElementById("in10").focus();

}else{
alert("Registro modificado");
for ( r = 0; r < coches.length; r++) {
    if (z==coches[r].bastidor) {
        coches[r].tiporeparacion=document.getElementById("in10").value;
        r=coches.length;
        
    }     
}
document.getElementById("in2").focus();
document.getElementById("in2").value="";
 document.getElementById("modificar").style.visibility = "hidden";

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


