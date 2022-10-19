import Services from "../util/servicos"

const KEYS = {
    consultorio: 'consultorio',
    consultorioId: 'consultorioId'
}

export function getAllConsultoriosAsList() {
    const consultorios = getAllConsultorios()
    return consultorios.map((item, index) => ({
        id: item.id,
        value: item.nome
    }))
}

export const getAllTipoConsultorio = () => ([
    { id: '1', value: 'Cirurgia' },
    { id: '2', value: 'Atendimento Geral' },
    { id: '3', value: 'Consultas' }
])

export function insertConsultorio(data) {
    let consultorios = getAllConsultorios()
    data['id'] = generateConsultorioId()
    consultorios.push(data)
    localStorage.setItem(KEYS.consultorio, JSON.stringify(consultorios))
}

export function updateConsultorio(data) {
    let consultorios = getAllConsultorios()
    let recordIndex = consultorios.findIndex(x => x.id === data.id)
    consultorios[recordIndex] = { ...data }
    localStorage.setItem(KEYS.consultorio, JSON.stringify(consultorios))
}

export function getConsultorioPorId(id) {
    let consultorios = getAllConsultorios()
    let consultorio = consultorios.filter(x => x.id === id)
    return (consultorio[0])
}

export function deleteConsultorio(id) {
    let consultorios = getAllConsultorios()
    consultorios = consultorios.filter(x => x.id !== id)
    localStorage.setItem(KEYS.consultorio, JSON.stringify(consultorios))
}


export function generateConsultorioId() {
    if (localStorage.getItem(KEYS.consultorioId) === null)
        localStorage.setItem(KEYS.consultorioId, '0')
    var id = parseInt(localStorage.getItem(KEYS.consultorioId))
    localStorage.setItem(KEYS.consultorioId, (++id).toString())
    return id
}

export function getAllConsultorios() {
    if (localStorage.getItem(KEYS.consultorio) === null)
        localStorage.setItem(KEYS.consultorio, JSON.stringify([]))
    let consultorios = JSON.parse(localStorage.getItem(KEYS.consultorio))
    let funcionarios = Services.funcionarioService.getAllFuncionariosAsList()

    let tipos = getAllTipoConsultorio()

    const consultoriosFim = consultorios.map(x => {
        let selecionado = funcionarios.filter(func => func.id === x.responsavel)
        if (selecionado.length > 0) {
            return ({
                ...x,
                responsavelTexto: selecionado[0].value,
                tipoTexto: tipos[x.tipo - 1].value
            })
        }else{
            return ({
                ...x,
                responsavelTexto: '',
                tipoTexto: tipos[x.tipo - 1].value
            })
        }
    })
    return consultoriosFim

}

