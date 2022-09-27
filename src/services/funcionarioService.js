
const KEYS = {
    funcionario: 'funcionario',
    funcionarioId: 'funcionarioId'
}


export const getAllFuncionariosAsList = () => ([
    { id: '1', value: 'Médico dos testes' },
    { id: '2', value: 'Médica das dores' },
    { id: '3', value: 'Dentista Enfermo' },
    { id: '4', value: 'Dentista Pé Quebrado' }
])

export const getAllFuncoesAsList = () => ([
    { id: '1', value: 'Médico(a)' },
    { id: '2', value: 'Secretário(a)' },
    { id: '3', value: 'Auxiliar administrativo(a)' },
    { id: '4', value: 'Dentista' },
    { id: '5', value: 'Veterinário(a)' },
    { id: '6', value: 'Contador(a)' },
    { id: '7', value: 'Administrador(a)' },
])

export function getUltimaMatricula(cargoId){
    if(['2', '3', '6'].includes(cargoId))
        return 'A000000'
    else if(['1', '4', '5'].includes(cargoId))
        return 'M000000'
    else   
        return 'Z000000'
}

export const getAllMatriculaFuncoesAsList = () => ([
    { id: '1', value: 'Médico(a)', matricula: 'M' },
    { id: '2', value: 'Secretário(a)', matricula: 'A' },
    { id: '3', value: 'Auxiliar administrativo(a)', matricula: 'A' },
    { id: '4', value: 'Dentista', matricula: 'M' },
    { id: '5', value: 'Veterinário(a)', matricula: 'M' },
    { id: '6', value: 'Contador(a)', matricula: 'A' },
    { id: '7', value: 'Administrador(a)', matricula: 'Z' },
])


export const getAllPermissoesAsList = () => ([
    { id: '1', value: 'Financeiro' },
    { id: '2', value: 'Paciente' },
    { id: '3', value: 'Consultas' },
    { id: '4', value: 'Exames' },
])

export function insertFuncionario(data) {
    let funcionarios = getAllFuncionarios()
    data['id'] = generateFuncionarioId()
    funcionarios.push(data)
    localStorage.setItem(KEYS.funcionario, JSON.stringify(funcionarios))
}

export function updateFuncionario(data) {
    let funcionarios = getAllFuncionarios()
    let recordIndex = funcionarios.findIndex(x => x.id == data.id)
    funcionarios[recordIndex] = { ...data }
    localStorage.setItem(KEYS.funcionario, JSON.stringify(funcionarios))
}

export function deleteFuncionario(id) {
    let funcionarios = getAllFuncionarios()
    funcionarios = funcionarios.filter(x => x.id != id)
    localStorage.setItem(KEYS.funcionario, JSON.stringify(funcionarios))
}


export function generateFuncionarioId() {
    if (localStorage.getItem(KEYS.funcionarioId) == null)
        localStorage.setItem(KEYS.funcionarioId, '0')
    var id = parseInt(localStorage.getItem(KEYS.funcionarioId))
    localStorage.setItem(KEYS.funcionarioId, (++id).toString())
    return id
}

export function getAllFuncionarios() {
    if (localStorage.getItem(KEYS.funcionario) == null)
        localStorage.setItem(KEYS.funcionario, JSON.stringify([]))
    let funcionarios = JSON.parse(localStorage.getItem(KEYS.funcionario))
    return funcionarios


}