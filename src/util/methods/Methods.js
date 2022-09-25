



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

const Method = {
    handleSearch
}

export default Method