async function update(){
    console.clear()
    const response = await fetch('data/tarefas.json')
    const tarefas = await response.json()

    if(document.getElementById('tarefas')){
        document.body.removeChild(document.getElementById('tarefas'))
    }
    else {
        console.log(document.getElementById('tarefas'))
    }
    var tarefasdiv = document.createElement('div')
    tarefasdiv.id = 'tarefas'
    document.body.insertAdjacentElement('beforeend', tarefasdiv)

    setTimeout(function () {
        for (let i = 0; i < tarefas.terceirobimestre.length; i++) {
            const newDiv = document.createElement('div')
            const titleDiv = document.createElement('h3')
            const materiadiv = document.createElement('div')
            const materiatitle = document.createElement('h4')
            const tarefatarefa = document.createElement('p')
            const dataentrega = document.createElement('p')
            var year = tarefas.terceirobimestre[i].data.split('/')[2]
            var month = tarefas.terceirobimestre[i].data.split('/')[1]
            var day = tarefas.terceirobimestre[i].data.split('/')[0]
            const data = new Date(year, month, day)
            if (tarefas.terceirobimestre[i].materia === 'Matemática Aplicada') {
                materiadiv.id = 'matplicada'
            }
            else if (tarefas.terceirobimestre[i].materia === 'Gramática') {
                materiadiv.id = 'gramatica'
            }
            else if (tarefas.terceirobimestre[i].materia === 'Literatura') {
                materiadiv.id = 'literatura'
            }
            else if (tarefas.terceirobimestre[i].materia === 'Ciências') {
                materiadiv.id = 'ciencias'
            }
            else if (tarefas.terceirobimestre[i].materia === "Matemática") {
                materiadiv.id = 'matematica'
            }
            else if (tarefas.terceirobimestre[i].materia === 'História') {
                materiadiv.id = 'historia'
            }
            titleDiv.id = 'data'
            titleDiv.textContent = tarefas.terceirobimestre[i].data
            dataentrega.textContent = `Data de Entrega: ${tarefas.terceirobimestre[i].dataentrega}`
            dataentrega.id = 'dataentrega'
            materiatitle.id = 'titulotarefa'
            materiatitle.textContent = tarefas.terceirobimestre[i].materia
            newDiv.id = tarefas.terceirobimestre[i].data
            tarefatarefa.textContent = tarefas.terceirobimestre[i].tarefa
            tarefatarefa.id = 'tarefatarefa'
            newDiv.appendChild(titleDiv)
            materiadiv.appendChild(materiatitle)
            materiadiv.appendChild(tarefatarefa)
            materiadiv.appendChild(dataentrega)
            newDiv.appendChild(materiadiv)
            if (document.getElementById(tarefas.terceirobimestre[i].data)) {
                console.log(`A data ${tarefas.terceirobimestre[i].data} já foi inserida`)
                document.getElementById(tarefas.terceirobimestre[i].data).appendChild(materiadiv)
            }
            else {
                if (i === 0) {
                    tarefasdiv.appendChild(newDiv)
                }
                else if (data.getMonth() > tarefasdiv.firstElementChild.id.split('/')[1] || data.getDay() > tarefasdiv.firstElementChild.id.split('/')[0]) {
                    tarefasdiv.insertAdjacentElement('afterbegin', newDiv)
                }
                else if (data.getMonth() < tarefasdiv.firstElementChild.id.split('/')[1] || data.getDay() < tarefasdiv.firstElementChild.id.split('/')[0]) {
                    tarefasdiv.insertBefore(newDiv, tarefasdiv.firstElementChild)
                }
                else {
                    tarefasdiv.insertAdjacentElement('beforeend', newDiv)
                }
            }
        }
    }, 10)
    setTimeout(organize, 10)
}

async function organize(){
    var tarefasdiv = document.getElementById('tarefas')

    for (let i = tarefasdiv.length-1; i >= 0; i--){
        console.log(tarefasdiv.childNodes[i])
    }
}

update()
document.getElementById('reloadbutton').addEventListener('click', update)
