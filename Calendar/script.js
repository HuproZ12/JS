document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const taskContainer = document.getElementById('task-container');
    const taskContent = document.getElementById('task-content');

    const daysInMonth = 30; // Pour simplifier, on suppose que le mois a 30 jours

    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i;
        dayElement.addEventListener('click', () => {
            taskContainer.classList.remove('hidden');
            taskContent.innerHTML = `# Tâches du ${i}\n\n- Tâche 1\n- Tâche 2\n- Tâche 3`;
        });
        calendar.appendChild(dayElement);
    }
});
