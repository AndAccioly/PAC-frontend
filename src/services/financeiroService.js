import Services from "../util/servicos"

const KEYS = {
    cardFinanceiro: 'cardFinanceiro',
    cardFinanceiroId: 'cardFinanceiroId',
    itemFinanceiroId: 'itemFinanceiroId'
}

export const getAllTipoFinanceiro = () => ([
        { id: '1', value: 'Materiais' },
        { id: '2', value: 'Consultas' },
        { id: '3', value: 'Cirurgias' },
        { id: '4', value: 'Contas' },
        { id: '5', value: 'Funcionários' },
        { id: '6', value: 'Outro' },
])

export function getConsultorioPorId(id, consultorios){
    let consultorio = consultorios.filter(x => x.id === id)
    return(consultorio[0])
}

export function insertCardFinanceiro(data) {
    let cardsFinanceiros = getAllCardsFinanceiros()
    data['id'] = generateCardFinanceiroId()
    cardsFinanceiros.push(data)
    localStorage.setItem(KEYS.cardFinanceiro, JSON.stringify(cardsFinanceiros))

    let consultorio = getConsultorioPorId(data.consultorioId, Services.consultorioService.getAllConsultorios())
    if(consultorio.cardsFinanceiros === undefined || consultorio.cardsFinanceiros === null)
        consultorio.cardsFinanceiros = []
    consultorio.cardsFinanceiros.push(data)
    Services.consultorioService.updateConsultorio(consultorio)
}

export function updateCardFinanceiro(data) {
    let consultorio = getConsultorioPorId(data.consultorioId, Services.consultorioService.getAllConsultorios())
    
    let recordConsultorioIndex = consultorio.cardsFinanceiros.findIndex(x => x.id === data.id)
    consultorio.cardsFinanceiros[recordConsultorioIndex] = { ...data }
    Services.consultorioService.updateConsultorio(consultorio)

    let cardsFinanceiros = getAllCardsFinanceiros()
    let recordIndex = cardsFinanceiros.findIndex(x => x.id === data.id)
    cardsFinanceiros[recordIndex] = { ...data }

    localStorage.setItem(KEYS.cardFinanceiro, JSON.stringify(cardsFinanceiros))
}

export function deleteCardFinanceiro(id) {
    let cardParaRemover = getAllCardsFinanceiros().filter(x => x.id === id)[0]
    let consultorio = getConsultorioPorId(cardParaRemover.consultorioId,  Services.consultorioService.getAllConsultorios())
    let cardsAtualizados = consultorio.cardsFinanceiros.filter(x => x.id !== id)
    consultorio = {...consultorio, cardsFinanceiros: cardsAtualizados}

    Services.consultorioService.updateConsultorio(consultorio)

    let cardsFinanceiros = getAllCardsFinanceiros()
    let cardsFinanceirosAtualizados = cardsFinanceiros.filter(x => x.id !== id)
    localStorage.setItem(KEYS.cardFinanceiro, JSON.stringify(cardsFinanceirosAtualizados))
}

export function generateCardFinanceiroId() {
    if (localStorage.getItem(KEYS.cardFinanceiroId) === null)
        localStorage.setItem(KEYS.cardFinanceiroId, '0')
    var id = parseInt(localStorage.getItem(KEYS.cardFinanceiroId))
    localStorage.setItem(KEYS.cardFinanceiroId, (++id).toString())
    return id
}

export function generateItemFinanceiroId() {
    if (localStorage.getItem(KEYS.itemFinanceiroId) === null)
        localStorage.setItem(KEYS.itemFinanceiroId, '0')
    var id = parseInt(localStorage.getItem(KEYS.itemFinanceiroId))
    localStorage.setItem(KEYS.itemFinanceiroId, (++id).toString())
    return id
}

export function getAllCardsFinanceiros() {
    if (localStorage.getItem(KEYS.cardFinanceiro) === null)
        localStorage.setItem(KEYS.cardFinanceiro, JSON.stringify([]))
    let cardsFinanceiros = JSON.parse(localStorage.getItem(KEYS.cardFinanceiro))
    return cardsFinanceiros
}

export function getAllCardsFinanceirosConsultorio(consultorioId){
    let cardsFinanceiros = getAllCardsFinanceiros()
    let selecionados = cardsFinanceiros.filter(x => x.consultorioId === consultorioId)
    return selecionados
}