const KEYS = {
    paciente: 'paciente',
    pacienteId: 'pacienteId'
}

export function insertPaciente(data){
    console.log('inserindo')
    let pacientes = getAllPacientes()
    data['id'] = generatePacienteId()
    pacientes.push(data)
    localStorage.setItem(KEYS.paciente, JSON.stringify(pacientes))
}


export function generatePacienteId(){
    if(localStorage.getItem(KEYS.pacienteId) == null)
        localStorage.setItem(KEYS.pacienteId, '0')    
    var id = parseInt(localStorage.getItem(KEYS.pacienteId))
    localStorage.setItem(KEYS.pacienteId, (++id).toString() )
    return id
}

export function getAllPacientes(){
    if(localStorage.getItem(KEYS.paciente) == null)
        localStorage.setItem(KEYS.paciente, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.paciente))
}