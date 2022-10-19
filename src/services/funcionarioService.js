import Services from "../util/servicos"
import { getConsultorioPorId } from "./consultorioService"

const KEYS = {
    funcionario: 'funcionario',
    funcionarioId: 'funcionarioId'
}


export function getAllFuncionariosAsList(){
    let itens = []
    let funcionarios = getAllFuncionariosSemTexto()
    funcionarios.map(item => {
        itens.push({id: item.id, value: item.nome})
    })
    return itens
}

export const getAllFuncoesAsList = () => ([
    { id: '1', value: 'Médico(a)' },
    { id: '2', value: 'Secretário(a)' },
    { id: '3', value: 'Auxiliar administrativo(a)' },
    { id: '4', value: 'Dentista' },
    { id: '5', value: 'Veterinário(a)' },
    { id: '6', value: 'Contador(a)' },
    { id: '7', value: 'Administrador(a)' },
])

export function getUltimaMatricula(cargoId) {
    if (['2', '3', '6'].includes(cargoId))
        return 'A000000'
    else if (['1', '4', '5'].includes(cargoId))
        return 'M000000'
    else
        return 'Z000000'
}

export function getPermissaoPorId(id){
    return(getAllPermissoesAsList().filter(x => x.id === id))
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
    { id: 1, value: 'Financeiro' },
    { id: 2, value: 'Paciente' },
    { id: 3, value: 'Consultas' },
    { id: 4, value: 'Exames' },
])

export function insertFuncionario(data) {
    let funcionarios = getAllFuncionarios()
    data['id'] = generateFuncionarioId()
    funcionarios.push(data)
    localStorage.setItem(KEYS.funcionario, JSON.stringify(funcionarios))

    data.listaConsultorios.map(item => {
        let consultorio = getConsultorioPorId(item)
        if(consultorio.funcionarios === undefined || consultorio.funcionarios === null)
            consultorio.funcionarios = []
        consultorio.funcionarios.push(data.id)
        Services.consultorioService.updateConsultorio(consultorio)
    })
}

export function getFuncionariosAsList(lista){
    let funcionarios = getAllFuncionarios()
    if (Number(lista.length) === 0){
        return [{ id: '0', value: 'Nenhum funcionário cadastrado' }]
    }
    let listaFinal = []
    lista.map(item => {
        let func = funcionarios.filter(x => x.id === item)
        if(func.length > 0)
            listaFinal.push({id: func[0].id, value: func[0].nome})
    })
    return listaFinal
}

export function updateFuncionario(data) {
    let funcionarios = getAllFuncionarios()
    let recordIndex = funcionarios.findIndex(x => x.id === data.id)
    funcionarios[recordIndex] = { ...data }
    localStorage.setItem(KEYS.funcionario, JSON.stringify(funcionarios))
}

export function deleteFuncionario(id) {
    let funcionarios = getAllFuncionarios()
    funcionarios = funcionarios.filter(x => x.id !== id)
    localStorage.setItem(KEYS.funcionario, JSON.stringify(funcionarios))
}


export function generateFuncionarioId() {
    if (localStorage.getItem(KEYS.funcionarioId) === null)
        localStorage.setItem(KEYS.funcionarioId, '0')
    var id = parseInt(localStorage.getItem(KEYS.funcionarioId))
    localStorage.setItem(KEYS.funcionarioId, (++id).toString())
    return id
}

export function getAllFuncionarios() {
    if (localStorage.getItem(KEYS.funcionario) === null)
        localStorage.setItem(KEYS.funcionario, JSON.stringify([]))
    let funcionarios = JSON.parse(localStorage.getItem(KEYS.funcionario))
    const cargos = getAllFuncoesAsList()
    const permissoes = getAllPermissoesAsList()
    const final = funcionarios.map(x => ({
        ...x,
        cargoTexto: cargos[x.cargo - 1].value,
        consultoriosTexto: x.listaConsultorios.map((item) => (
            Services.consultorioService.getConsultorioPorId(item).nome
        )),
        permissoesTexto: x.listaPermissoes.map((item) => (
            getPermissaoPorId(item)
        ))


    }))
    return final
}

export function getAllFuncionariosSemTexto() {
    if (localStorage.getItem(KEYS.funcionario) === null)
        localStorage.setItem(KEYS.funcionario, JSON.stringify([]))
    let funcionarios = JSON.parse(localStorage.getItem(KEYS.funcionario))
    return funcionarios


}