//https://www.jqueryscript.net/other/jQuery-Plugin-For-Animated-Stackable-Toast-Messages-Toast.html
//https://codepen.io/alexerlandsson/pen/mPWgpO
var filnom=/^(?!.* (?: |$))[a-z\-]+$/;
var filtercontraseña=/^([a-zA-Z0-9]){12}/;
var filtermatricula=/^([0-9]){4}([a-zA-Z]){3}/;
var usuario1 ={usuario:"mario",contraseña:'12345678901a'};//usuarios y contraseñas para poder acceder
var usuario2 ={usuario:"pedro",contraseña:'12345678901b'};
var usuario3 ={usuario:"juan",contraseña:'12345678901c'};
var usuarios=[usuario1,usuario2,usuario3];
var filtermarca=/^(?!.* (?: |$))[a-z ]+$/;
var contadorcoches=2;

var filteremail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var coche1={matricula:"2591HZV",estancia:true,marca:"seat",modelo:"ibiza",color:"negro",nomproo:"mario",ape1prope:"crespo",ape2prope:"martin",email:"crespopopo@gmail.com"};
var coche2={matricula:"2592HZV",estancia:true,marca:"citroen",modelo:"xsara",color:"rojo",nomproo:"lucia",ape1prope:"gallego",ape2prope:"martin",email:"lucia@gmail.com"};
var coche3={matricula:"2593HZV",estancia:false,marca:"ford",modelo:"mondeo",color:"azul",nomproo:"patxi",ape1prope:"gallego",ape2prope:"cerezo",email:"patxi@gmail.com"};

var coches=[coche1,coche2,coche3];
var comp=true;
var comprobar=0;

$("#di2").hide();
$("#di3").hide();
$("#di4").hide();
$("#di6").hide();
$("#di7").hide();
$("#di8").hide();

$( "#b1" ).click(function() {
 
  $( "#bo" ).toggleClass( "divx1" );//cambio de color
  $( "#di2" ).toggleClass( "divx2" );//cambio de color
 
});

function mal(){ //configuracion del plugin alert error
  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "2000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
}


function bien(){//configuracion del plugin alert bien
  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-full-width",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "2000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
}

function cuidado(){//configuracion del plugin alert warning
  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "2000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
}


  function regi(){//configuracion de casuistica de registro
    
  x1=$('#i1').val();
  x2=$('#i2').val();
  x2=x2.toLowerCase();
    
    
    var registrado=false;

      
   
    
      
    if(filtercontraseña.test(x1)==false){ //control de contraseña
      
      mal();
      Command: toastr["error"]("Contraseña con formato incorrecto");
  $('#i1').val('');
  $('#i1').focus();}


if(filnom.test(x2)==false){
    
mal();
Command: toastr["error"]("Nombre con formato incorrecto");//control de nombre
  $('#i2').val('');
  $('#i2').focus();}
    
    
    if(filnom.test(x2)==true&&filtercontraseña.test(x1)){ //control de contraseña y nombre registrado, para ver si es el correcto
        for (i = 0; i < usuarios.length; i++) {
            if (x2==usuarios[i].usuario&&x1==usuarios[i].contraseña) {
              bien ();
              Command: toastr["success"]("Usuario logueado");


                i=usuarios.length;
                comprobar=1;
                $("#di1").hide();
                $("#di2").fadeIn(4500);
                $('#i1').val('');
                $("#b1").hide();
            }
            
         }
         for (i = 0; i < usuarios.length; i++) {
          if (x2==usuarios[i].usuario&&x1!=usuarios[i].contraseña) { //control de contraseña y nombre registrado para controlar si la clave es erronea
              
           mal();
              Command: toastr["error"]("Contraseña incorrecta");
              i=usuarios.length;
              comprobar=1;
              $('#i1').val('');
              $('#i1').focus();
          }
          
       }

    

    }else{

      
      
      for ( i = 0; i < usuarios.length; i++) {
        if(x2==usuarios[i].usuario){
          
          comprobar=1;
        
          i = usuarios.length;

        }
        
      }

              
      
     }
      
     
if(comprobar==0&&(x2.length>0||x2.length==0)){
 //controla que el usuario no tiene registro
  

 mal();
  Command: toastr["error"]("Usuario no registrado");
  $('#i2').val('');
  $('#i2').focus();  
  $('#i1').val('');



}


     comprobar=0;


     $('#i12').val(contadorcoches);
     //document.getElementById("i12").value=contadorcoches;

   }

  
  

function entrada() { //muestra y quita div

  $("#di2").hide();
$("#di1").hide();
$("#di3").fadeIn("slow");
}


function matri(){ //funcion de control de matriculas
 
  x1=$('#i3').val();
  x1=x1.toUpperCase();

  

  var registrado=false;


  




    
  if(filtermatricula.test(x1)==true){ //control de matricula con formato correcto

    if(contadorcoches==400)//para controlar que no tenga mas de 400 coches en parking

    {
  
for (z = 0; z < coches.length; z++) { //controla que el coche este en el parking
  if (x1==coches[z].matricula&&coches[z].estancia==true) {
    cuidado();
    Command: toastr["warning"]("El Coche se encuentra en el parking");
      z=coches.length;
      registrado=true;
                                 
      $('#i3').val('');
  }
   
}

      mal();
      Command: toastr["error"]("Parking con las 400 plazas ocupadas");//para controlar que no tenga mas de 400 coches en parking
      $('#i3').val('');
      $('#i3').focus();
  
    }else{


      for (i = 0; i < coches.length; i++) {

        
          if (x1==coches[i].matricula&&coches[i].estancia==false) {



            bien();
            Command: toastr["success"]("Coche registrado, puede pasar"); //esl cohe esta registrado y no esta en el parking
              coches[i].estancia=true;
              contadorcoches++;
              $('#i12').val(contadorcoches);
              i=coches.length;
              registrado=true;
              $("#di3").hide();
              $("#di2").fadeIn(3500);
              $('#i3').val('');
          

                        }
                        if (x1==coches[i].matricula&&coches[i].estancia==true) {
                          cuidado();
                          Command: toastr["warning"]("El Coche se encuentra en el parking");//esl cohe esta registrado y si esta en el parking
                            i=coches.length;
                            registrado=true;
                                                       
                            $('#i3').val('');
                                      }




          
       }
  if (registrado==false) {
   cuidado();
    Command: toastr["warning"]("Coche no registrado en la bbdd"); // no hay coche en la bbdd del parking con esa matricula
   
    document.getElementById("i4").value=x1;
    
    $("#di3").hide();
    $("#di4").fadeIn(3500);
      

     
}
  }
  }else{
    
    if(filtermatricula.test(x1)==false)//matricula con formato incorrecto,Ej: 2591HZV "
    
    
    mal();
    Command: toastr["error"]("matricula con formato incorrecto,Ej: 2591HZV ");
  $('#i3').val('');
  $('#i3').focus();}

 
}


function altanueva(){ //para controlar los registros de los coches nuevos
  
if (filtermarca.test($('#i5').val())==false) {
  $('#i5').val('');
  $('#i5').focus();
  mal();
  Command: toastr["error"]("marca con formato incorrecto");
  
}


if (filtermarca.test($('#i6').val())==false) {
  $('#i6').val('');
  $('#i6').focus();
  mal();
  Command: toastr["error"]("modelo con formato incorrecto");
  
}

if (filnom.test($('#i7').val())==false) {
  $('#i7').val('');
  $('#i7').focus();
  mal();
  Command: toastr["error"]("nombre con formato incorrecto");
  
}

if (filnom.test($('#i8').val())==false) {
  $('#i8').val('');
  $('#i8').focus();
  mal();
  Command: toastr["error"]("Apellido 1 con formato incorrecto");
  
}

if (filnom.test($('#i9').val())==false) {
  $('#i9').val('');
  $('#i9').focus();
  mal();
  Command: toastr["error"]("apellido2 con formato incorrecto");
  
}

if (filtermarca.test($('#i11').val())==false) {
  $('#i11').val('');
  $('#i11').focus();
  mal();
  Command: toastr["error"]("color con formato incorrecto");
  
}

if (filteremail.test($('#i10').val())==false) {
  $('#i10').val('');
  $('#i10').focus();
  mal();
  Command: toastr["error"]("email con formato incorrecto");
  
}



if (filtermarca.test($('#i5').val())==true&&filtermarca.test($('#i11').val())==true&&filtermarca.test($('#i6').val())==true&&filnom.test($('#i7').val())==true&&filnom.test($('#i8').val())==true&&filnom.test($('#i9').val())==true&&filteremail.test($('#i10').val())==true) {

  
  //si todo esta ok mete el coche en el array

  bien();
  Command: toastr["success"]("Coche registrado, puede pasar");

  var coche4={matricula:$('#i4').val(),estancia:true,marca:$('#i5').val(),modelo:$('#i6').val(),color:$('#i11').val(),nomproo:$('#i7').val(),ape1prope:$('#i8').val(),ape2prope:$('#i9').val(),email:$('#i10').val()};

  coches.push(coche4);
  contadorcoches++;
  $('#i12').val(contadorcoches);
  $('#i5').val('');
  $('#i6').val('');
  $('#i7').val('');
  $('#i8').val('');
  $('#i9').val('');
  $('#i10').val('');
  $('#i11').val('');
  $('#i3').val('');
  $("#di4").hide();
  $("#di2").fadeIn(3500);
  
}

}

function consultar(){ //lista de coches

  
  $("#di6").fadeIn("slow");
  $("#di8").fadeIn("slow");
  $("#di2").hide();

  pruen2="<table><thead><tr><th>MATRICULA</th><th>ESTANCIA</th><th>MARCA</th><th>MODELO</th><th>COLOR</th><th>NOMBRE</th><th>APELLIDO1</th><th>APELLIDO2</th><th>EMAIL</th></tr></thead></table>";
  document.getElementById("di6").innerHTML +=pruen2+"</br>";
  for(i=0;i<coches.length;i++){
   
                    
  pruen="<table><tbody><tr><td>"+ coches[i].matricula+"</td><td>"+ coches[i].estancia+"</td><td>"+ coches[i].marca+"</td><td>"+ coches[i].modelo+"</td><td>"+ coches[i].color+"</td><td>"+ coches[i].nomproo+"</td><td>"+ coches[i].ape1prope+"</td><td>"+ coches[i].ape2prope+"</td><td>"+ coches[i].email+"</td></tr></tbody></table>";
          
    document.getElementById("di6").innerHTML +=pruen;
    
}



}

function salidas1(){

  $("#di2").hide();
    $("#di7").fadeIn("slow");

}

function salida() { //para dar coches de baja y sus diferentes casuisticas

  
  x1=$('#i13').val();
  x1=x1.toUpperCase();
  


  var registrado=false;
    
  if(filtermatricula.test(x1)==true){
      for (i = 0; i < coches.length; i++) {
         
        
          if (x1==coches[i].matricula&&coches[i].estancia==false) { //el coche no esta en el parking
            mal();
            Command: toastr["error"]("Este coche no se encuentra en el parking");
              i=coches.length;
              registrado=true;
              $('#i13').val('');
              $('#i13').focus();
                        }
                        if (x1==coches[i].matricula&&coches[i].estancia==true) {//el coche esta en el parking
                          bien();
                          Command: toastr["success"]("El Coche puede salir del parking"); 
                          coches[i].estancia=false;
                          contadorcoches--;
                          $('#i13').val('');
                            i=coches.length;
                            registrado=true;
                            $("#di7").hide();
                            $("#di2").fadeIn(3500);
                            $('#i12').val(contadorcoches);
                            
                                      }

          
       }

  
}else{mal();
  Command: toastr["error"]("formato de matricula incorrecto");}

if (registrado==false) {
  cuidado();
   Command: toastr["warning"]("Coche no registrado en la bbdd");
  
   $('#i4').val(x1);

   $('#i13').val('');
   $('#i13').focus();
   
       
}

}

function volver(){ //funcion para el boton de volver
  $("#di7").hide();
    $("#di2").fadeIn("slow");


}
 
function volver2(){//funcion para el boton de volver
  document.getElementById("di6").innerHTML = '';
  $("#di6").hide();
  $("#di8").hide();
    $("#di2").fadeIn("slow");


}


function volver3(){//funcion para el boton de volver
  $("#di3").hide();
    $("#di2").fadeIn("slow");
    document.getElementById('i3').value='';


}