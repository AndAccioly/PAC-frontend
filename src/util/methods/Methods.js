



const handleSearch = (e, setFilterFn) => {
    let target = e.target
    setFilterFn({
        fn: items => {
            if (target.value == ''){
                return items

            }else{
                if (/\d/.test(target.value)){
                    return items.filter(x => x.cpf.replace('-', '').replaceAll('.', '').includes(target.value.replace('-', '').replaceAll('.', '')))
                }
                else{
                    return items.filter(x => x.nome.toLowerCase().includes(target.value))
                }
            }
        }
    })
}

const onClickRemoveMiniItem = (item, lista, setLista) => {
    const novaLista = lista.filter(x => x !== item)
    setLista(novaLista)
}

const onChangeAddMiniItem = (e, lista, setLista, handleInputChange) => {
    if(!lista.includes(e.target.value)){
        const novaLista = [...lista, e.target.value]
        setLista(novaLista)
    }
    handleInputChange(e)
}


const Method = {
    handleSearch,
    onClickRemoveMiniItem,
    onChangeAddMiniItem
}

export default Method