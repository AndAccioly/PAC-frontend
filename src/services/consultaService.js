import Services from "../util/servicos"

const KEYS = {
    consulta: 'consulta',
    consultaId: 'consultaId'
}

export const getAllTipoConsulta = () =>([
    { id: '1', value: 'Ortopedia' },
    { id: '2', value: 'Buco Maxilo' },
    { id: '3', value: 'Acompanhamento' },
    { id: '4', value: 'Limpeza Dental' }
])

export function insertConsulta(data) {
    let consultas = getAllConsultas()
    data['id'] = generateConsultaId()
    consultas.push(data)
    localStorage.setItem(KEYS.consulta, JSON.stringify(consultas))
}

export function updateConsulta(data) {
    let consultas = getAllConsultas()
    let recordIndex = consultas.findIndex(x => x.id === data.id)
    consultas[recordIndex] = { ...data }
    localStorage.setItem(KEYS.consulta, JSON.stringify(consultas))
}

export function deleteConsulta(id) {
    let consultas = getAllConsultas()
    consultas = consultas.filter(x => x.id !== id)
    localStorage.setItem(KEYS.consulta, JSON.stringify(consultas))
}


export function generateConsultaId() {
    if (localStorage.getItem(KEYS.consultaId) === null)
        localStorage.setItem(KEYS.consultaId, '0')
    var id = parseInt(localStorage.getItem(KEYS.consultaId))
    localStorage.setItem(KEYS.consultaId, (++id).toString())
    return id
}

export function getAllConsultas() {
    if (localStorage.getItem(KEYS.consulta) === null)
        localStorage.setItem(KEYS.consulta, JSON.stringify([]))
    let consultas = JSON.parse(localStorage.getItem(KEYS.consulta))
    const pacientes = Services.pacienteService.getPacientesAsList()
    const tiposConsulta = getAllTipoConsulta()
    const planosSaude = Services.pacienteService.getPlanosSaudeLista()
    const funcionarios = Services.funcionarioService.getAllFuncionariosAsList()
    const consultorios = Services.consultorioService.getAllConsultoriosAsList()

    return consultas.map(x => ({
        ...x,
        pacienteTexto: pacientes.filter(p => p.id === x.paciente)[0].value,
        tipoConsultaTexto: tiposConsulta[x.tipoConsulta - 1].value,
        planoSaudeTexto: planosSaude[x.planoSaude - 1].value,
        funcionarioTexto: funcionarios[x.funcionario - 1].value,
        consultorioTexto: consultorios[x.consultorio - 1].value,
    }))

}