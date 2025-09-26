const turnoForm = document.getElementById('turnoForm')

let consultas = JSON.parse(localStorage.getItem('consultas')) || []

const guardarConsultas = () => localStorage.setItem('consultas', JSON.stringify(consultas))

const turnosAgendadosDiv = document.getElementById('turnosAgendados')

turnoForm.addEventListener('submit', function (e) {
    e.preventDefault()
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
        consultaDiv.className = "tarjeta-consulta"
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
// document.addEventListener('DOMContentLoaded',renderConsultas)

document.addEventListener('DOMContentLoaded', function () {
    renderConsultas()
    const fechaInput = document.getElementById('fecha')
    if (fechaInput) {
        const hoy = new Date()
        const yyyy = hoy.getFullYear()
        console.log(yyyy)
        const mm = String(hoy.getMonth() + 1).padStart(2, '0')
        const dd = String(hoy.getDate()).padStart(2, '0')  // padStart(2,'0') para asegurar dos dígitos
        fechaInput.min = `${yyyy}-${mm}-${dd}`
        console.log(fechaInput.min)
        //avisar si selecciona fin de semana
        fechaInput.addEventListener('change', function () {
            const valor = fechaInput.value
            if (!valor) return
            const dia = new Date(valor + 'T00:00:00').getDay()
            if (dia === 0 || dia === 6) {
                alert('Has seleccionado un fin de semana. Los turnos solo están disponibles de lunes a viernes.')
                fechaInput.value = ''
            }
        })
    }
})