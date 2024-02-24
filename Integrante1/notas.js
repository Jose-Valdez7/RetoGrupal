estudiantes=[
    {nombre:"Edwin",apellido:"Erazo",nota1:8.4, nota2:9.5,nota3:8.7,total:26.6,promedio:8.7},
    {nombre:"Maritza",apellido:"Rosero",nota1:5.4,nota2:8.5,nota3:9.7,total:23.6,promedio:9.7},
    {nombre:"Esteban",apellido:"Guaranda",nota1:9.4,nota2:10.0,nota3:9.0,total:28.4,promedio:9.0},
    {nombre:"Ricardo",apellido:"Batista",nota1:6.4,nota2:9.5,nota3:8.9,total:24.8,promedio:8.9}
];

calcularTotal=function(n1,n2,n3){
    let suma=n1+n2+n3;
    return suma;
}

calcularPromedio=function(p1,p2,p3){
    let promedio=(p1+p2+p3)/3;
    return promedio
}

calcular=function(){
    let n1=recuperarFloat("txtNota1");
    let n2=recuperarFloat("txtNota2");
    let n3=recuperarFloat("txtNota3");
    let total=calcularTotal(n1,n2,n3);
    mostrarTexto("lblResultadoTotal","TOTAL: "+total);
    let promedio=calcularPromedio(n1,n2,n3);
    mostrarTexto("lblResultadoPromedio","PROMEDIO: "+promedio);
    habilitarComponente("btnGuardar");
    
}

guardar=function(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let n1=recuperarFloat("txtNota1");
        if(n1<0 || n1>10){
            mostrarTexto("lblErrorNota1","Nota 1 debe estar entre 0 y 10");
            let nota1=false;
            return nota1;
        }else {
            mostrarTexto("lblErrorNota1","");
        }
    let n2=recuperarFloat("txtNota2");
        if(n2<0 || n2>10){
            mostrarTexto("lblErrorNota2","Nota 2 debe estar entre 0 y 10");
            let nota2=false;
            return nota2;
        }else {
            mostrarTexto("lblErrorNota2","");
        }
    let n3=recuperarFloat("txtNota3");
        if(n3<0 || n3>10){
            mostrarTexto("lblErrorNota3","Nota 3 debe estar entre 0 y 10");
            let nota3=false;
            return nota3;
        }else {
            mostrarTexto("lblErrorNota3","");
        }
    let total=calcularTotal(n1,n2,n3);
    let promedio=calcularPromedio(n1,n2,n3);
    let promedioRedondeado=promedio.toFixed(2);
    let estudiante={};
    if(nota1!=false && nota2!=false &&nota3!=false){
    estudiante.nombre=nombre;
    estudiante.apellido=apellido;
    estudiante.nota1=n1;
    estudiante.nota2=n2;
    estudiante.nota3=n3;
    estudiante.total=total;
    estudiante.promedio=promedioRedondeado;
    estudiantes.push(estudiante);
    }
    alert("Notas Guardadas con Exito");
    mostrarEstudiantes();
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtNota1","");
    mostrarTextoEnCaja("txtNota2","");
    mostrarTextoEnCaja("txtNota3","");
    mostrarTexto("lblResultadoTotal","");
    mostrarTexto("lblResultadoPromedio","");
    deshabilitarComponente("btnGuardar");
}

mostrarEstudiantes=function(){
    let cmpTabla=document.getElementById("tablaEstudiantes");
    let contenidoTabla="<table><tr>"+"<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+"<th>NOTA 1</th>"+
    "<th>NOTA 2</th>"+"<th>NOTA 3</th>"+
    "<th>TOTAL</th>"+
    "<th>PROMEDIO</th></tr>";
    let estudiantesEncontrados;
    for(let i=0;i<estudiantes.length;i++){
        estudiantesEncontrados=estudiantes[i];
        contenidoTabla+="<tr><td>"+estudiantesEncontrados.nombre+"</td>"+
        "<td>"+estudiantesEncontrados.apellido+"</td>"+
        "<td>"+estudiantesEncontrados.nota1+"</td>"+
        "<td>"+estudiantesEncontrados.nota2+"</td>"+
        "<td>"+estudiantesEncontrados.nota3+"</td>"+
        "<td>"+estudiantesEncontrados.total+"</td>"+
        "<td>"+estudiantesEncontrados.promedio+"</td></tr>"
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
    deshabilitarComponente("btnGuardar");
}

