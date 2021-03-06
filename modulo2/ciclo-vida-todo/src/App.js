import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [{
      id: 1,
      texto: 'sffe',
      completa: false
    },
    {
      id: 2,
      texto: 'fsdfdsf',
      completa: true
    }
    ],
    inputValue: '',
    filtro: ''
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.inputValue === this.state.inputValue) {
      localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
    }
  };

  componentDidMount() {
    const tarefas = localStorage.getItem('tarefas')
    if (tarefas) {
      const dadosTarefas = localStorage.getItem('tarefas')
      const dadosConvertidos = JSON.parse(dadosTarefas)
      this.setState({id: dadosConvertidos[0]?.id})
      this.setState({texto: dadosConvertidos[0]?.texto})
      this.setState({completa: dadosConvertidos[0]?.completa})
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const novaTarefa = [...this.state.tarefas];
    const novasTarefas = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    };
    novaTarefa.push(novasTarefas)
    this.setState({tarefas: novaTarefa})
    this.setState({inputValue: ''})
  }

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((task) => {
      if(task.id === id) {
        const newTask = {
          ...task,
          completa: !task.completa
        }
        return newTask
      } else {
        return task
      }
    })
    this.setState({tarefas: novaListaDeTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
