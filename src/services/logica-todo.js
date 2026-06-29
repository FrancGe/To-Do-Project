
// Constructor de proyectos
export function crearProyecto(nombre) {
    return {
        id: crypto.randomUUID();
        nombre: nombre,
        tareas: [],
    };
}

// Constructor de las tareas
export function crearTarea(titulo, descripcion, fechaVencimiento, prioridad) {
    return {
        id: crypto.randomUUID(),
        titulo,
        descripcion,
        fechaVencimiento,
        prioridad,
        completada: false
    };
}

// Funcion para añadir nuevas tareas al proyecto seleccionado
export function añadirNuevaTarea(nombreProyecto, nuevaTarea) {
    let proyectoEncontrado = misProyectos.find(proyecto => proyecto.nombre === nombreProyecto);

    if(proyectoEncontrado) {
        proyectoEncontrado.tareas.push(nuevaTarea);
    }
}

export function eliminarProyecto(nombreProyecto) {
    let proyectoEncontrado = misProyectos.find(proyecto => proyecto.nombre === nombreProyecto);

    if(proyectoEncontrado) {
        misProyectos = misProyectos.filter(proyecto => proyecto.nombre !== nombreProyecto);
    }
}