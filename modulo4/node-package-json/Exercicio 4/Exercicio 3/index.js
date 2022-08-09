

const task = () => {
    let tarefas = ['responder emails']
    tarefas.push(process.argv[2])
    return tarefas
}
console.log(task()) 