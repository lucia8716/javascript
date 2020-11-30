const mysql=require('mysql');

const conexion=mysql.createConnection(
{
host:'localhost',
user:'root',
password:'',
database:'usuarios'
});

conexion.connect((err)=>{

if(err){throw err}
else{console.log('Conexion establecida con bbdd');}

});


conexion.query('insert into user(id,nombre)values(9,"Victor")',(err,rows)=>{

    if(err){throw err}
    else{console.log('Los datos se han almacenado correctamente:');
}
});


conexion.query('select * from user',(err,rows)=>{

    if(err){throw err}
    else{console.log('Los datos almacenados son:');
console.log(rows);
//console.log(rows.length);
//var usuarioUno = rows[0].id;
//var usia = rows[0].nombre;
//console.log(usuarioUno);
//console.log(usia);
}
   
    });






conexion.end();

