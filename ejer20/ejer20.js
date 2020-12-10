//https://www.jqueryscript.net/other/jQuery-Plugin-For-Animated-Stackable-Toast-Messages-Toast.html

var filnom=/^(?!.* (?: |$))[a-z\-]+$/;
var filtercontraseña=/^([a-zA-Z0-9]){12}/;
var filtermatricula=/^([0-9]){4}([a-zA-Z]){3}/;
var usuario1 ={usuario:"mario",contraseña:'12345678901a'};
var usuario2 ={usuario:"pedro",contraseña:'12345678901b'};
var usuario3 ={usuario:"juan",contraseña:'12345678901c'};
var usuarios=[usuario1,usuario2,usuario3];

var coche1={matricula:"2591HZV",estancia:"false",marca:"seat",modelo:"ibiza",color:"negro",nomproo:"mario",ape1prope:"crespo",ape2prope:"martin",email:"crespopopo@gmail.com"};
var coche2={matricula:"2592HZV",estancia:"true",marca:"citroen",modelo:"xsara",color:"rojo",nomproo:"lucia",ape1prope:"gallego",ape2prope:"martin",email:"lucia@gmail.com"};
var coche3={matricula:"2593HZV",estancia:"false",marca:"ford",modelo:"mondeo",color:"azul",nomproo:"patxi",ape1prope:"gallego",ape2prope:"cerezo",email:"patxi@gmail.com"};

var coches=[coche1,coche2,coche3];
var comp=true;
var comprobar=0;

$("#di2").hide();
$("#di3").hide();
$("#di4").hide();


  function regi(){
    
  x1=$('#i1').val();
  x2=$('#i2').val();
  x2=x2.toLowerCase()
    
    
    var registrado=false;

      
      
    if(filtercontraseña.test(x1)==false){
      
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
      Command: toastr["error"]("Contraseña con formato incorrecto");
  $('#i1').val('');
  $('#i1').focus();}


if(filnom.test(x2)==false){
    
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
Command: toastr["error"]("Nombre con formato incorrecto");
  $('#i2').val('');
  $('#i2').focus();}
    
    
    if(filnom.test(x2)==true&&filtercontraseña.test(x1)){
        for (i = 0; i < usuarios.length; i++) {
            if (x2==usuarios[i].usuario&&x1==usuarios[i].contraseña) {
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
              Command: toastr["success"]("Usuario logueado");


                i=usuarios.length;
                comprobar=1;
                $("#di1").hide();
                $("#di2").fadeIn(4500);
                $('#i1').val('');
            }
            
         }
         for (i = 0; i < usuarios.length; i++) {
          if (x2==usuarios[i].usuario&&x1!=usuarios[i].contraseña) {
              
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
        alert(comprobar);
          i = usuarios.length;

        }
        
      }

      /*if (comprobar==false) {

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
        Command: toastr["error"]("Usuario no registrado");
        $('#i2').val('');
        $('#i2').focus();  
        $('#i1').val('');
        

              
      }*/
    
         
      
     }
      
     
if(comprobar==0&&(x2.length>0||x2.length==0)){

  

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
  Command: toastr["error"]("Usuario no registrado");
  $('#i2').val('');
  $('#i2').focus();  
  $('#i1').val('');



}


     comprobar=0;

   }

  
  

function entrada() {

  $("#di2").hide();
$("#di1").hide();
$("#di3").fadeIn("slow");
}


function matricula(){

  x1=$('#i3').val();
  x1=x1.toUpperCase();

  var registrado=false;
    
  if(filtermatricula.test(x1)==true){
      for (i = 0; i < coches.length; i++) {
          if (x1==coches[i].matricula) {
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
            Command: toastr["success"]("Coche registrado");
              i=coches.length;
              registrado=true;
              
                          
          }
          
       }
  if (registrado==false) {
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
    Command: toastr["warning"]("Coche no registrado en la bbdd");
    $("#di3").hide();
    $("#di4").fadeIn(3500);

     
}

  }else{
    
    if(filtermatricula.test(x1)==false)
    
    
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
    Command: toastr["error"]("matricula con formato incorrecto,Ej: 2591HZV ");
  $('#i3').val('');
  $('#i3').focus();}

 }









 
