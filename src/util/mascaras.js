
function dinheiro(valor) {

    return "R$" + Number(valor).toFixed(2)
}

function cpf(valor) {
    return valor
        .replace(/\D/g, '') 
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
}

const Mascaras = {
    dinheiro,
    cpf
}

export default Mascaras