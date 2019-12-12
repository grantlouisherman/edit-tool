const Select = (key, options, labelText) => {
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

const Input = (key, labelText) => {
    const input = document.createElement('input')
    const label = document.createElement('label')
    const textForLabel = document.createTextNode(labelText)
    label.appendChild(textForLabel)
    label.appendChild(input)
    return label
}



document.addEventListener('DOMContentLoaded', (event) => {
    let components = [Select(0, ['test', 'test','test'], 'label'), Input(1, 'input')]
    const form = document.getElementById('form')
    components.forEach(component => {
        console.log(component)
        form.appendChild(component)
    })
  })
