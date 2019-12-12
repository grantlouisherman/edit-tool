const { ipcRenderer } = require('electron')


const submitButtonAction = (arguments) => {
    ipcRenderer.send('submit', [...arguments])
}

const SelectComponent = (key, options, labelText) => {
    const createOptionForSelect = optionText => {
        const optionTag = document.createElement('option')
        optionTag.innerHTML = optionText
        return optionTag
    }
    const select = document.createElement('select')
    const label = document.createElement('label')
    const optionsArray = options.map(createOptionForSelect)
    optionsArray.forEach(option => {
        select.appendChild(option)
    })
    const textForLabel = document.createTextNode(labelText)
    label.appendChild(textForLabel)
    label.appendChild(select)
    return label
}

const InputComponent = (key, labelText) => {
    const input = document.createElement('input')
    const label = document.createElement('label')
    const textForLabel = document.createTextNode(labelText)
    label.appendChild(textForLabel)
    label.appendChild(input)
    return label
}


const componentFactoryFunction = componentType => {
    switch(componentType){
        case "select":
            return SelectComponent()
        case "input":
            return InputComponent()
        default:
            return InputComponent()

    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    let components = [SelectComponent(0, ['test', 'test','test'], 'label'), InputComponent(1, 'input')]
    const form = document.getElementById('form')
    components.forEach(component => {
        console.log(component)
        form.appendChild(component)
    })
  })
