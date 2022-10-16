
function dinheiro(valor) {
    valor = maxLength(String(valor), 10)
    while(valor.charAt(0) === '0'){
        valor = valor.substring(1, valor.lenth)
    }
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/(\d)(\d{2})$/,'$1,$2')
    valor= valor.replace(/(?=(\d{3})+(\D))\B/g, '.')
    return valor
}

function dinheiroCifrao(valor){
    if(valor === '0') return 'R$0,00'
    return "R$" + dinheiro(valor)
}

function numeroInteiro(valor){
    if(valor === undefined || Number(valor) === 0)
        return '0'
    while(valor.charAt(0) === '0'){
        valor = valor.substring(1, valor.lenth)
    }
    return valor.replace(/\D/g, "")
}

function maxLength(valor, tam){
    return valor.substring(0, tam)
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
    dinheiroCifrao,
    maxLength,
    dinheiro,
    cpf,
    numeroInteiro
}

export default Mascaras