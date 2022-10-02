
const KEYS = {
    financeiro: 'financeiro',
    financeiroId: 'financeiroId'
}

export function insertFinanceiro(data) {
    let financeiros = getAllFinanceiros()
    data['id'] = generateFinanceiroId()
    financeiros.push(data)
    localStorage.setItem(KEYS.financeiro, JSON.stringify(financeiros))
}

export function updateFinanceiro(data) {
    let financeiros = getAllFinanceiros()
    let recordIndex = financeiros.findIndex(x => x.id === data.id)
    financeiros[recordIndex] = { ...data }
    localStorage.setItem(KEYS.financeiro, JSON.stringify(financeiros))
}

export function deleteFinanceiro(id) {
    let financeiros = getAllFinanceiros()
    financeiros = financeiros.filter(x => x.id !== id)
    localStorage.setItem(KEYS.financeiro, JSON.stringify(financeiros))
}


export function generateFinanceiroId() {
    if (localStorage.getItem(KEYS.financeiroId) === null)
        localStorage.setItem(KEYS.financeiroId, '0')
    var id = parseInt(localStorage.getItem(KEYS.financeiroId))
    localStorage.setItem(KEYS.financeiroId, (++id).toString())
    return id
}

export function getAllFinanceiros() {
    if (localStorage.getItem(KEYS.financeiro) === null)
        localStorage.setItem(KEYS.financeiro, JSON.stringify([]))
    let financeiros = JSON.parse(localStorage.getItem(KEYS.financeiro))
    return financeiros
}