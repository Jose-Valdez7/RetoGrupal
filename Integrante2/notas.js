let estudiantes = [{ nombre: "Edwin", apellido: "Erazo", nota1: 8.4, nota2: 9.5, nota3: 8.7, total: 26.6, promedio: 8.7 },
                  { nombre: "Maritza", apellido: "Rosero", nota1: 5.4, nota2: 8.5, nota3: 9.7, total: 23.6, promedio: 9.7 },
                  { nombre: "Esteban", apellido: "Guaranda", nota1: 9.4, nota2: 10.0, nota3: 9.0, total: 28.4, promedio: 9.0 },
                  { nombre: "Ricardo", apellido: "Bastia", nota1: 6.4, nota2: 9.5, nota3: 8.9, total: 24.8, promedio: 8.9 },];


                  /**4. Agregar 5 cajas de texto: para ingresar nombre, apellido, nota1, nota2, nota3
5. Agregar un botón Calcular
6. En notas.js agregar una función calcularTotal que recibe 3 parámetros llamados
n1,n2 y n3 y retorna la suma de los 3 parámetros.*/
calcularTotal=function(n1,n2,n3){
    let suma=n1+n2+n3;
    return suma;
}

/*7. En notas.js agregar una función calcularPromedio que recibe 3 parámetros llamados*/
calcularPromedio=function(p1,p2,p3){
    let promedio=((p1+p2+p3)/3).toFixed(2);
    return promedio;
}


/*p1,p2 y p3 y retorna el promedio de los 3 parámetros.
8. En notas.js agregar una función calcular, que realiza la siguiente lógica: Toma las 3
notas de las cajas de texto, las convierte en float y con estos valores convertidos
invoca a calcularTotal, guarda el resultado en una variable y la muestra en pantalla,
luego invoca a calcularPromedio, guarda el resultado en otra variable y la muestra
en pantalla.*/

calcular=function(){
    let valorNota1=recuperarFloat("txtNota1");
    let valorNota2=recuperarFloat("txtNota2");
    let valorNota3=recuperarFloat("txtNota3");
    let valorTotal="Suma Total: "+calcularTotal(valorNota1,valorNota2,valorNota3);
    mostrarTexto("lblMensaje",valorTotal);
    let valorPromedio="Promedio Total: "+calcularPromedio(valorNota1,valorNota2,valorNota3)
    mostrarTexto("lblMensajePromedio",valorPromedio);
    habilitarComponente("btnGuardar");
}


/*9. Crear un botón Calcular, que invoca a la función calcular.
10. En notas.js crear una función guardar, que toma los valores de las cajas de texto, y
con estos valores crea un objeto estudiante y lo agrega al arreglo. Como tiene que
agregar en el objeto los atributos total y promedio, esta función debe invocar
nuevamente a calcularTotal y calcularPromedio, para completar el objeto antes de
agregarlo al arreglo.*/
limpiar=function(){
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido"," ");
    mostrarTextoEnCaja("txtNota1"," ");
    mostrarTextoEnCaja("txtNota2"," ");
    mostrarTextoEnCaja("txtNota3"," ");
    deshabilitarComponente("btnGuardar");
}


guardar=function () {
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorNota1=recuperarFloat("txtNota1");
    let valorNota2=recuperarFloat("txtNota2");
    let valorNota3=recuperarFloat("txtNota3");
    let valorTotal=calcularTotal(valorNota1,valorNota2,valorNota3);
    let valorPromedio=calcularPromedio(valorNota1,valorNota2,valorNota3);

    if (valorNombre!=""&& valorApellido!="" && !isNaN(valorNota1) && !isNaN(valorNota2) && !isNaN(valorNota3)) {
        let nuevoEstudiante = {};
        nuevoEstudiante.nombre = valorNombre;
        nuevoEstudiante.apellido = valorApellido;
        nuevoEstudiante.nota1 = valorNota1;
        nuevoEstudiante.nota2 = valorNota2;
        nuevoEstudiante.nota3 = valorNota3;
        nuevoEstudiante.total = valorTotal;
        nuevoEstudiante.promedio = valorPromedio;
        
        estudiantes.push(nuevoEstudiante);
        mostrarEstudiante();
        alert("Notas guardada con éxito ");
        limpiar();
    }else{
        alert("DATOS INCORRECTAMENTE ");

    }

        
}





/*11. Mostrar una tabla en pantalla con todas las personas del arreglo. La tabla se debe
mostrar apenas se carga la página (evento onload, en el body). La tabla se debe
refrescar cada vez que se agrega una persona. Agregar estilos a la tabla.*/
mostrarEstudiante = function () {
    let cmpTabla = document.getElementById("tablaNotas");
    let contenidoTabla = "<table><tr>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>NOTA 1</th>" +
        "<th>NOTA 2</th>" +
        "<th>NOTA 3</th>" +
        "<th>TOTAL</th>" +
        "<th>PROMEDIO</th>" +
        "<tr></tr>";
    let elementoEstudiante;
    for (let i = 0; i < estudiantes.length; i++) {
        elementoEstudiante = estudiantes[i];
        contenidoTabla +=
            "<tr><td>" + elementoEstudiante.nombre + "</td>"
            + "<td>" + elementoEstudiante.apellido + "</td>"
            + "<td>" + elementoEstudiante.nota1 + "</td>"
            + "<td>" + elementoEstudiante.nota2 + "</td>"
            + "<td>" + elementoEstudiante.nota3 + "</td>"
            + "<td>" + elementoEstudiante.total + "</td>"
            + "<td>" + elementoEstudiante.promedio + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
    deshabilitarComponente("btnGuardar");
}
/*12. Agregar una imagen en la parte superior de su página

13. Agregar el autor en la parte inferior de la tabla */