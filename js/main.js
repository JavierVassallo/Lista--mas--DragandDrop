(function(){
  //Variables
  var lista = document.getElementById("lista"),
      btnNuevaTarea = document.getElementById("btn-agregar");
  //Funciones
  // asi quiero que sean mis elementos li
  // <li class="list-group-item bg-secondary text-center" id="ruta" ><a class="text-danger" href="#">Ruta 1</a> <input type="button" class="btn-btn float-right" id="btn-borrar" value="x">  </li>
  var agregarTarea = function(){
    var numero=lista.children.length +1,
        tarea="Ruta "+ numero,
        nuevaTarea = document.createElement("li"),
        boton = document.createElement("input"),
        enlace = document.createElement("a"),
        contenido = document.createTextNode(tarea);
        enlace.appendChild(contenido);
        enlace.setAttribute("href", "#");
        enlace.setAttribute("class","text-white");
        boton.setAttribute("type","button");
        boton.setAttribute("class","btn-btn float-right");
        boton.setAttribute("value","x");
        boton.setAttribute("id","btn-borrar");
        // poniendo el evento click al boton asociado a borrar (porque delete no me dejaba ponerlo como nombre de funcion)
        boton.addEventListener("click",borrar);
        nuevaTarea.appendChild(enlace);
        nuevaTarea.appendChild(boton);
        nuevaTarea.setAttribute("class", "list-group-item bg-secondary text-center fila");
        nuevaTarea.setAttribute("id", "ruta");
        nuevaTarea.setAttribute("draggable","true");
        lista.appendChild(nuevaTarea);
  };
  var borrar = function (){
    $("#ruta").remove();
  };

  //Eventos
    //Agregar Ruta ("tarea")
  btnNuevaTarea.addEventListener("click", agregarTarea);

}());
