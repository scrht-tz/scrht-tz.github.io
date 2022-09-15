const tarefasdiv = document.getElementById('tarefas')

async function update(url){
    const response = await fetch(url)
    const tarefas = await response.json()
    for (let i = 0; i < tarefas.terceirobimestre.length; i++) {
        if (document.getElementById(tarefas.terceirobimestre[i].data)){
            console.log(`A data ${tarefas.terceirobimestre[i].data} já foi inserida`)
            const titleDiv = document.createElement('h3')
            const materiadiv = document.createElement('div')
            const materiatitle = document.createElement('h4')
            const tarefatarefa = document.createElement('p')
            const dataentrega = document.createElement('p')
            if (tarefas.terceirobimestre[i].materia === 'Matemática Aplicada'){
                materiadiv.id = 'matplicada'}
            else if (tarefas.terceirobimestre[i].materia === 'Gramática'){
                materiadiv.id = 'gramatica'
            }
            else if (tarefas.terceirobimestre[i].materia == 'Literatura'){
                materiadiv.id = 'literatura'
            }
            else if (tarefas.terceirobimestre[i].materia == 'Ciências'){
                materiadiv.id = 'ciencias'
            }
            else if (tarefas.terceirobimestre[i].materia == 'História'){
                materiadiv.id = 'historia'
            }
            titleDiv.id = 'data'
            titleDiv.textContent = tarefas.terceirobimestre[i].data
            dataentrega.textContent = `Data de Entrega: ${tarefas.terceirobimestre[i].dataentrega}`
            dataentrega.id = 'dataentrega'
            materiatitle.id = 'titulotarefa'
            materiatitle.textContent = tarefas.terceirobimestre[i].materia
            tarefatarefa.textContent = tarefas.terceirobimestre[i].tarefa
            tarefatarefa.id = 'tarefatarefa'
            materiadiv.appendChild(materiatitle)
            materiadiv.appendChild(tarefatarefa)
            materiadiv.appendChild(dataentrega)
            document.getElementById(tarefas.terceirobimestre[i].data).appendChild(materiadiv)
        }
        else {
            const newDiv = document.createElement('div')
            const titleDiv = document.createElement('h3')
            const materiadiv = document.createElement('div')
            const materiatitle = document.createElement('h4')
            const tarefatarefa = document.createElement('p')
            const dataentrega = document.createElement('p')
            if (tarefas.terceirobimestre[i].materia === 'Matemática Aplicada'){
                materiadiv.id = 'matplicada'}
            else if (tarefas.terceirobimestre[i].materia === 'Gramática'){
                materiadiv.id = 'gramatica'
            }
            else if (tarefas.terceirobimestre[i].materia === 'Literatura'){
                materiadiv.id = 'literatura'
            }
            else if (tarefas.terceirobimestre[i].materia === 'Ciências'){
                materiadiv.id = 'ciencias'
            }
            else if (tarefas.terceirobimestre[i].materia === "Matemática"){
                materiadiv.id = 'matematica'
            }
            titleDiv.id = 'data'
            titleDiv.textContent = tarefas.terceirobimestre[i].data
            dataentrega.textContent = tarefas.terceirobimestre[i].dataentrega
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
            console.log(tarefasdiv.childNodes)
            if (newDiv.id.split('/')[1] > tarefasdiv.firstElementChild.id.split('/')[1] || newDiv.id.split('/')[0] > tarefasdiv.firstElementChild.id.split('/')[0]){
                tarefasdiv.insertAdjacentElement('afterbegin', newDiv)
            }
            else if (newDiv.id.split('/')[1] < tarefasdiv.lastElementChild.id.split('/')[1] || newDiv.id.split('/')[0] < tarefasdiv.lastElementChild.id.split('/')[0]){
                tarefasdiv.insertAdjacentElement('beforeend', newDiv)
            }
        }
    }
}

update('data/tarefas.json')
