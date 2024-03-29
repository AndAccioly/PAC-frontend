const KEYS = {
    paciente: 'paciente',
    pacienteId: 'pacienteId'
}

export const getPlanosSaudeLista = () => ([
    { id: '1', value: 'Nenhum' },
    { id: '2', value: 'Caixa' },
    { id: '3', value: 'Unimed' },
    { id: '4', value: 'Camed' }
])


export const getPacientesAsList = () => {
    let itens = []
    let pacientes = getAllPacientes()
    pacientes.map(item => {
        itens.push({id: item.id, value: item.nome})
    })
    return itens    
}


export function insertPaciente(data) {
    let pacientes = getAllPacientes()
    data['id'] = generatePacienteId()
    pacientes.push(data)
    localStorage.setItem(KEYS.paciente, JSON.stringify(pacientes))
}

export function updatePaciente(data) {
    let pacientes = getAllPacientes()
    let recordIndex = pacientes.findIndex(x => x.id === data.id)
    pacientes[recordIndex] = { ...data }
    localStorage.setItem(KEYS.paciente, JSON.stringify(pacientes))
}

export function deletePaciente(id) {
    let pacientes = getAllPacientes()
    pacientes = pacientes.filter(x => x.id !== id)
    localStorage.setItem(KEYS.paciente, JSON.stringify(pacientes))
}


export function generatePacienteId() {
    if (localStorage.getItem(KEYS.pacienteId) === null)
        localStorage.setItem(KEYS.pacienteId, '0')
    var id = parseInt(localStorage.getItem(KEYS.pacienteId))
    localStorage.setItem(KEYS.pacienteId, (++id).toString())
    return id
}

export function getAllPacientes() {
    if (localStorage.getItem(KEYS.paciente) === null)
        localStorage.setItem(KEYS.paciente, JSON.stringify([]))
    let pacientes = JSON.parse(localStorage.getItem(KEYS.paciente))
    let planosSaude = getPlanosSaudeLista()
    return pacientes.map(x => ({
        ...x,
        planoSaudeTexto: planosSaude[x.planoSaude - 1].value
    }))

}