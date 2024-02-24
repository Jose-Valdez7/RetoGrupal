let estudiantes =[
    {nombre:"Edwin",apellido:"Erazo", nota1:8.4,nota2:9.5,nota3:8.7,total:26.6,promedio:8.7},
    {nombre:"Maritza",apellido:"Rosero", nota1:5.4,nota2:8.5,nota3:9.7,total:23.6,promedio:9.7},
    {nombre:"Esteban",apellido:"Guaranda", nota1:9.4,nota2:10.0,nota3:9.3,total:28.4,promedio:9.0},
    {nombre:"Ricardo",apellido:"Batista", nota1:6.4,nota2:9.5,nota3:8.9,total:24.8,promedio:8.9},
]
calcularTotal = function(n1,n2,n3){
    let sumaTotal;
    sumaTotal=n1+n2+n3;
    return sumaTotal;
}
calcularPromedio=function(p1,p2,p3){
    let calculoPromedio;
    calculoPromedio=(p1+p2+p3)/3;
    return calculoPromedio;
}
calcular=function(){
    let nota1 = recuperarFloat ("txtNota1");
    let nota2 = recuperarFloat ("txtNota2");
    let nota3 = recuperarFloat ("txtNota3");
    let sumaTotal,promedio;
    
    sumaTotal=calcularTotal(nota1,nota2,nota3);
    mostrarTexto("lblSuma",sumaTotal);
    promedio=calcularPromedio(nota1,nota2,nota3);
    mostrarTexto("lblPromedio",promedio);
    habilitarComponente("btnGuardar")
}
guardar=function(){
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let nota1 = recuperarFloat ("txtNota1");
    let nota2 = recuperarFloat ("txtNota2");
    let nota3 = recuperarFloat ("txtNota3");
    let sumaTotal,promedio;
    sumaTotal=calcularTotal(nota1,nota2,nota3);
    promedioRecuperado=calcularPromedio(nota1,nota2,nota3);
    let promedioFloat = promedioRecuperado.toFixed(2);
    let estudiante={}
    estudiante.nombre=valorNombre;
    estudiante.apellido=valorApellido;
    estudiante.nota1=nota1;
    estudiante.nota2=nota2;
    estudiante.nota3=nota3;
    estudiante.total=sumaTotal;
    estudiante.promedio=promedioFloat;

    estudiantes.push(estudiante);
    
    mostarTabla();
    alert("Notas guardadas");

    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtNota1","");
    mostrarTextoEnCaja("txtNota2","");
    mostrarTextoEnCaja("txtNota3","");
    mostrarTextoEnCaja("lblSuma",0);
    mostrarTextoEnCaja("tablaEstudiantes",0);


    deshabilitarComponente("btnGuardar");

}
mostarTabla=function(){
    let cmpTabla = document.getElementById("tablaEstudiantes");
    let contenidoTabla = "<table><tr>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>NOTA 1</th>"+
    "<th>NOTA 2</th>"+
    "<th>NOTA 3</th>"+
    "<th>SUMA</th>"+
    "<th>PROMEDIO</th>"+
    "</tr>";
    let elementoEstudiantes;
    //bucle para mostrar los objetos
    for (let i = 0; i < estudiantes.length; i++) {
        elementoEstudiantes = estudiantes[i];
        contenidoTabla+=
        "<tr><td>"+elementoEstudiantes.nombre + "</td>"+
        "<td>"+elementoEstudiantes.apellido + "</td>"+
        "<td>"+elementoEstudiantes.nota1 + "</td>"+
        "<td>"+elementoEstudiantes.nota2 + "</td>"+
        "<td>"+elementoEstudiantes.nota3 + "</td>"+
        "<td>"+elementoEstudiantes.total + "</td>"+
        "<td>"+elementoEstudiantes.promedio + "</td>"+
        "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML=contenidoTabla;
    deshabilitarComponente("btnGuardar");
}







