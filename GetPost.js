//LIBRERIAS Y FRAMEWORKS IMPORTADOS O REQUERIDOS//
const express=require("express");
const multer=require("multer");
const fs=require("node:fs");
const cors=require("cors");
const { json } = require("body-parser");

//DECLARACION DE CONSTANTES Y FUNCIONES
const uploadPDF=multer({dest:'pdf/'});
const uploadJPG=multer({dest:'images/'});
const PORTAPP=3010;

//CREACION DEL SERVIDOR
const app=express();
app.use(cors());

app.listen(PORTAPP,()=>{
    console.log(`Servidor corriendo en Puerto: ${PORTAPP}`);
});

//METODO POST PARA SUBIR ARCHIVOS PDF//
app.post("/api/prueba/pdf",uploadPDF.single("formFile"),(req,res)=>{
    console.log(req.file)
    guardarPDF(req.file)
    tituloPDF()
    res.send("subido");
})
//----------FUNCION PARA MANIPLUAR ARCHIVO PDF----------
function guardarPDF(file){
    const newPath=`pdf/${file.originalname}`
    fs.renameSync(file.path,newPath)
    return newPath
}
//-----------FUNCION PARA OBTENER EL TITULO DEL ARCHIVO PDF-----------
//-----------Y JUNTAR CON EL ARCHIVO PDF Y HACER UN SOLO POST-----------
function tituloPDF(){

    var titulo= document.getElementById("TituloArchivo").value;
    
    try {    
        fetch("http://127.0.0.1:3001/api/prueba/pdf/name", {
            method: "POST",
            body: JSON.stringify({
                "TituloArchivo": titulo,
            }),
        headers: {
           "Content-type": "application/json; charset=UTF-8",
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

        } catch (error) {

        console.error(error)
            
        }
    
};

//METODO POST PARA SUBIR ARCHIVOS JPG
app.post("/api/prueba/image",uploadJPG.single("formImage"),(req,res)=>{
    console.log(req.file)
    guardarJPG(req.file)
    tituloJPG() 
    res.send("subido");
})
//----------FUNCION PARA MANIPLUAR ARCHIVO JPG----------
function guardarJPG(file){
    const newPath=`images/${file.originalname}`
    fs.renameSync(file.path,newPath)
    return newPath
}
//-----------FUNCION PARA OBTENER EL TITULO DEL ARCHIVO JPG-----------
//-----------Y JUNTAR CON EL ARCHIVO JPG Y HACER UN SOLO POST-----------
function tituloJPG(){

    var titulo= document.getElementById("TituloImagen").value;
    
    try {    
        fetch("http://127.0.0.1:3001/api/prueba/image/name", {
            method: "POST",
            body: JSON.stringify({
                "TituloImagen": titulo,
            }),
        headers: {
           "Content-type": "application/json; charset=UTF-8",
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

        } catch (error) {

        console.error(error)
            
        }
    
};

//METODO POST PARA SUBIR DATOS DE USER
function subirDatos(){

    var nombre= document.getElementById("Nombre").value;
    var apellido= document.getElementById("Apellido").value;
    var telefono= document.getElementById("Telefono").value;
    var fecha= document.getElementById("Fecha").value;
    
    try {    
        fetch("http://127.0.0.1:3001/api/prueba/users", {
            method: "POST",
            body: JSON.stringify({
                "nombre":nombre,
                "apellido":apellido,
                "numero":telefono,
                "fecha":fecha,
                    
            }),
        headers: {
           "Content-type": "application/json; charset=UTF-8",
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

        } catch (error) {

        console.error(error)
            
        }
    
};

//METODO GET PARA TRAER DATOS DE USER
function mostrarDatos(){
    try {    
        fetch("http://127.0.0.1:3001/api/prueba/users",)
        .then((response) => response.json())
        .then((users) => renderizarUsers(users));
    } catch (error) {
        console.error(error)    
    }
                  //---FUNCION RENDERIZAR DATOS DE USER-----------
const renderizarUsers = (users)=>{
    let body = '';
    for (let i = 0; i < users.length; i++) {
        body += `<tr><td>${users[i].id}</td><td>${users[i].nombre}</td><td>${users[i].apellido}</td><td>${users[i].numero}</td><td>${users[i].fecha}</td></tr>`
    }
    document.getElementById('users').innerHTML = body
    console.log(users)
}};



//METODO GET PARA TRAER PDF
function traerPDF(){
    try {    
        fetch("http://127.0.0.1:3001/api/prueba/pdf",)
        .then((response) => response.json())
        .then((json) => console.log(json));

    } catch (error) {
        console.error(error)    
    }
};