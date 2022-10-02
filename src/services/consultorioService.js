
const KEYS = {
    consultorio: 'consultorio',
    consultorioId: 'consultorioId'
}

export const getAllConsultoriosAsList = () => ([
    { id: '1', value: 'Consultório Torre' },
    { id: '2', value: 'Consultório Avenida 2' },
    { id: '3', value: 'Consultório Alameda' }
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
    return consultorios

}