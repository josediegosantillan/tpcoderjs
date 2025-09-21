const turnoForm = document.getElementById('turnoForm')

let consultas = JSON.parse(localStorage.getItem('consultas')) || []

const guardarConsultas = () => localStorage.setItem('consultas', JSON.stringify(consultas))

const turnosAgendadosDiv = document.getElementById('turnosAgendados')

turnoForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const fechaValor = document.getElementById('fecha').value
    if(fechaValor){
        //descartar sábados (6) y domingos (0)
        const dia = new Date(fechaValor + 'T00:00:00')
    }

    const nuevaConsulta = {
        id: Date.now(),
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        ubicacion: document.getElementById('ubicacion').value,
        fecha: document.getElementById('fecha').value,
        horario: document.getElementById('horario').value,
    }
    consultas.push(nuevaConsulta)
    console.log(consultas)
    guardarConsultas()
    renderConsultas()
})

function renderConsultas() {
    
    //limpio la pantalla para evitar duplicados
    turnosAgendadosDiv.innerHTML = ""
    consultas.forEach(consultas => {
        const consultaDiv = document.createElement('div')
        consultaDiv.className = "arjeta-consulta"
        consultaDiv.innerHTML = `
            <h2>Consulta agendada</h2>
            <p>Nombre: ${consultas.nombre}</p>
            <p>Correo Electrónico: ${consultas.email}</p>
            <p>Lugar de Consulta: ${consultas.ubicacion}</p>
            <p>Fecha de Consulta: ${consultas.fecha}</p>
            <p>Horario de Consulta: ${consultas.horario}</p>
            <p>ID de Consulta: ${consultas.id}</p>
            <button class="cancelar-turno" data-id="${consultas.id}">Cancelar Turno</button>
        `
    turnosAgendadosDiv.appendChild(consultaDiv)

    });
}

turnosAgendadosDiv.addEventListener('click', function(e){
    // me ayudo la ia para buscar esta forma de hacerlo igual dataset lo vimos en clase
    if(e.target.classList.contains('cancelar-turno')){
        const idParaCancelar = Number(e.target.dataset.id);
        consultas = consultas.filter(consulta => consulta.id !== idParaCancelar)
        guardarConsultas()
        renderConsultas()
        console.log(`Turno con ID ${idParaCancelar} cancelado.`)
    }
})
//renderConsultas al cargar la página para mostrar los turnos guardados.
document.addEventListener('DOMContentLoaded',renderConsultas)