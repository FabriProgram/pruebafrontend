function validarPdf()
    {
        var formFile = document.getElementById("formFile"); //VARIABLO PARA VER QUE HAY EN EL INPUT
        var archivoRuta = formFile.value; //VARIABLE QUE RECIBE EL ARCHIVO
        var extPermitidas = /(.pdf|.PDF)$/i;  //VARIABLE DE EXTENSIONES PERMITIDAS (EN ESTE CASO SOLO PDFs)
        //-----------------------MANEJO DE ERROR DE EXTENSIONES---------------------------
        if (!extPermitidas.exec(archivoRuta))
        {
            alert('El archivo seleccionado no es un PDF');
            formFile.value = '';
            return false;
        }
        else
        {
            //---------------------MANEJO DE ARCHIVO CORRECTO Y PREVIEW---------------------
            if(formFile.files && formFile.files[0])
            {
                var visor = new FileReader();
                visor.onload = function(e)
                { 
                    document.getElementById('visorPdf').innerHTML=
                    '<embed src="'+e.target.result+'" width="300px" height="500px">';
                };
                visor.readAsDataURL(formFile.files[0]);
            };
        }
    }

    function validarJPG()
    {
        var formImage = document.getElementById("formImage"); //VARIABLE PARA VER QUE HAY EN EL INPUT
        var imageRuta = formImage.value; //VARIABLE QUE RECIBE EL ARCHIVO
        var extPermitidas = /(.jpg|.JPG)$/i;  //VARIABLE DE EXTENSIONES PERMITIDAS (EN ESTE CASO SOLO JPGs)
        //-----------------------MANEJO DE ERROR DE EXTENSIONES---------------------------
        if (!extPermitidas.exec(imageRuta))
        {
            alert('La imagen seleccionada no es un JPG');
            formImage.value = '';
            return false;
        }
        else
        {
            //---------------------MANEJO DE ARCHIVO CORRECTO Y PREVIEW---------------------
            if(formImage.files && formImage.files[0])
            {
                var visor = new FileReader();
                visor.onload = function(e)
                {
                    document.getElementById('visorJPG').innerHTML=
                    '<embed src="'+e.target.result+'" width="240px" height="680px">';
                };
                visor.readAsDataURL(formImage.files[0]);
            };
        }
    }