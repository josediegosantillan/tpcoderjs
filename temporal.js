const turnoForm = document.getElementById('turnoForm');

// Si no hay nada en localStorage ('consultas' es null), iniciamos con un array vacío [].
let consultas = JSON.parse(localStorage.getItem('consultas')) || [];

// Función para guardar el array de consultas en localStorage.
function guardarConsultasEnStorage() {
    localStorage.setItem('consultas', JSON.stringify(consultas));
}

turnoForm.addEventListener ('submit', function(event) {
    event.preventDefault();
    const nuevaConsulta = {
        id: Date.now(), // Usar un timestamp es una forma sencilla de asegurar un ID único.
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        ubicacion: document.getElementById('ubicacion').value,
        fecha: document.getElementById('fecha').value,
        horario: document.getElementById('horario').value,
    };

    consultas.push(nuevaConsulta);

    // Guardar el array actualizado en localStorage.
    guardarConsultasEnStorage();

    console.log(consultas);
    renderConsultas();

    // turnoForm.reset();
});


function renderConsultas() {
    const turnosAgendadosDiv = document.getElementById('turnosAgendados');

    turnosAgendadosDiv.innerHTML = '';

    consultas.forEach(consulta => {
        const consultaDiv = document.createElement('div');
        consultaDiv.className = 'tarjeta-consulta';
        consultaDiv.innerHTML = `
            <h2>Consulta agendada</h2>
            <p>Nombre: ${consulta.nombre}</p>
            <p>Correo Electrónico: ${consulta.email}</p>
            <p>Lugar de Consulta: ${consulta.ubicacion}</p>
            <p>Fecha de Consulta: ${consulta.fecha}</p>
            <p>Horario de Consulta: ${consulta.horario}</p>
            <p>ID de Consulta: ${consulta.id}</p>
            <button class="cancelar-turno" data-id="${consulta.id}">Cancelar Turno</button>
        `;
        turnosAgendadosDiv.appendChild(consultaDiv);
    });
}

//renderConsultas al cargar la página para mostrar los turnos guardados.
document.addEventListener('DOMContentLoaded', renderConsultas);

const turnosAgendadosDiv = document.getElementById('turnosAgendados');

turnosAgendadosDiv.addEventListener('click', function(e) {
    
    if (e.target.classList.contains('cancelar-turno')) {

        const idParaCancelar = Number(e.target.dataset.id);

        consultas = consultas.filter(consulta => consulta.id !== idParaCancelar);

        guardarConsultasEnStorage();

        renderConsultas();
        
        console.log(`Turno con ID ${idParaCancelar} cancelado`);
    }
});
