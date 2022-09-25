


export const getAllFuncionariosAsList = () => ([
    { id: '1', value: 'Médico dos testes' },
    { id: '2', value: 'Médica das dores' },
    { id: '3', value: 'Dentista Enfermo' },
    { id: '4', value: 'Dentista Pé Quebrado' }
])


const KEYS = {
    funcionario: 'funcionario',
    funcionarioId: 'funcionarioId'
}

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