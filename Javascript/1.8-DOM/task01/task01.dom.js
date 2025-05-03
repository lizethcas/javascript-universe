// Selecciona todos los grupos de prioridad dentro del DOM
document.querySelectorAll('.priority-group').forEach(group => {
    
    // Obtiene el título del grupo de prioridad (por ejemplo: "High Priority", "Medium Priority", etc.)
    console.log(`Priority: ${group.querySelector('h2').textContent}`);
    
    // Cuenta cuántas tareas están dentro de ese grupo de prioridad
    console.log(`Tasks: ${group.querySelectorAll('ul li').length}\n`);
});