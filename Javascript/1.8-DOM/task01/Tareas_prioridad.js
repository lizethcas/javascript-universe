// Seleccionar todos los grupos de prioridad
const priorityGroups = document.querySelectorAll('.priority-group');

// Mostrar la cantidad total de grupos de prioridad
console.log(`Number of priority groups: ${priorityGroups.length}\n`);

// Recorrer cada grupo de prioridad
priorityGroups.forEach(group => {
    // Obtener el título de la prioridad
    const priorityTitle = group.querySelector('h2').textContent;

    // Contar cuántas tareas tiene ese grupo
    const tasks = group.querySelectorAll('ul li');
    
    // Mostrar resultados en consola
    console.log(`Priority: ${priorityTitle}`);
    console.log(`Tasks: ${tasks.length}\n`);
});