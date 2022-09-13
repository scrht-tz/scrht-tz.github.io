const tarefasdiv = document.getElementById('tarefas')

fetch('data/tarefas.json').then(response => {
    json = response.json()
    console.log(json)
    return json
})
.then(response => {
    for (let i = 0; i < response.terceirobimestre.length; i++) {
        if (document.getElementById(response.terceirobimestre[i].data)){
            console.log(`A data ${response.terceirobimestre[i].data} já foi inserida`)
            const titleDiv = document.createElement('h3')
            const materiadiv = document.createElement('div')
            const materiatitle = document.createElement('h4')
            const tarefatarefa = document.createElement('p')
            const dataentrega = document.createElement('p')
            if (response.terceirobimestre[i].materia === 'Matemática Aplicada'){
                materiadiv.id = 'matplicada'}
            else if (response.terceirobimestre[i].materia === 'Gramática'){
                materiadiv.id = 'gramatica'
            }
            else if (response.terceirobimestre[i].materia == 'Literatura'){
                materiadiv.id = 'literatura'
            }
            else if (response.terceirobimestre[i].materia == 'Ciências'){
                materiadiv.id = 'ciencias'
            }
            else if (response.terceirobimestre[i].materia == 'História'){
                materiadiv.id = 'historia'
            }
            titleDiv.id = 'data'
            titleDiv.textContent = response.terceirobimestre[i].data
            dataentrega.textContent = `Data de Entrega: ${response.terceirobimestre[i].dataentrega}`
            dataentrega.id = 'dataentrega'
            materiatitle.id = 'titulotarefa'
            materiatitle.textContent = response.terceirobimestre[i].materia
            tarefatarefa.textContent = response.terceirobimestre[i].tarefa
            tarefatarefa.id = 'tarefatarefa'
            materiadiv.appendChild(materiatitle)
            materiadiv.appendChild(tarefatarefa)
            materiadiv.appendChild(dataentrega)
            document.getElementById(response.terceirobimestre[i].data).appendChild(materiadiv)
        }
        else {
            const newDiv = document.createElement('div')
            const titleDiv = document.createElement('h3')
            const materiadiv = document.createElement('div')
            const materiatitle = document.createElement('h4')
            const tarefatarefa = document.createElement('p')
            const dataentrega = document.createElement('p')
            if (response.terceirobimestre[i].materia === 'Matemática Aplicada'){
                materiadiv.id = 'matplicada'}
            else if (response.terceirobimestre[i].materia === 'Gramática'){
                materiadiv.id = 'gramatica'
            }
            else if (response.terceirobimestre[i].materia == 'Literatura'){
                materiadiv.id = 'literatura'
            }
            else if (response.terceirobimestre[i].materia == 'Ciências'){
                materiadiv.id = 'ciencias'
            }
            titleDiv.id = 'data'
            titleDiv.textContent = response.terceirobimestre[i].data
            dataentrega.textContent = response.terceirobimestre[i].dataentrega
            dataentrega.id = 'dataentrega'
            materiatitle.id = 'titulotarefa'
            materiatitle.textContent = response.terceirobimestre[i].materia
            newDiv.id = response.terceirobimestre[i].data
            tarefatarefa.textContent = response.terceirobimestre[i].tarefa
            tarefatarefa.id = 'tarefatarefa'
            newDiv.appendChild(titleDiv)
            materiadiv.appendChild(materiatitle)
            materiadiv.appendChild(tarefatarefa)
            materiadiv.appendChild(dataentrega)
            newDiv.appendChild(materiadiv)
            console.log(tarefasdiv.childNodes, tarefasdiv.childNodes[1].id)
            tarefasdiv.appendChild(newDiv)
        }
    }
})

let i = 0
for (let i = 0; i <= tarefasdiv.childElementCount; i++){
    if (i !== 0){
        if (tarefasdiv.childNodes[i].id.split('/')[2] > tarefasdiv.childNodes[i - 1].id.split('/')[2]){
            tarefasdiv.insertAdjacentElement('afterbegin', tarefasdiv.childNodes[i])
            tarefasdiv.removeChild(tarefasdiv.childNodes[i+1])
        }
    }
}
