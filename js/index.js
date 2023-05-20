const formElement = document.querySelector('form')

formElement.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = formElement.name.value
    const endereco = formElement.address.value
    const estado = formElement.state.options[formElement.state.selectedIndex].value
    console.log(name)
    console.log(endereco)
    console.log(estado)

    let cargo = formElement.cargo

    for(item of cargo){
        if(item.checked){
            cargo = item.value
        }
    }

    

    let areaInteresse = formElement.area

    const listaInteresse = [];

    for(const item of areaInteresse){
        if(item.checked){
            listaInteresse.push(item.value)
        }
    }

    console.log(listaInteresse)
})