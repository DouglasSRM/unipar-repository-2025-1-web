import { useState } from 'react';
import './App.css'

function App() {

  const [nomeTarefa, setNomeTarefa] = useState('')
  const [listaTarefas, setListaTarefas] = useState([])

  const adicionarTarefa = () => {
                    
    if(nomeTarefa.trim() == ""){
      alert('Não inserir tarefa vazia')
      return
    }

    setListaTarefas([...listaTarefas,
                {id: new Date(),
                nome: nomeTarefa,
              status: false}])
    //Limpar o nome da tarefa
    setNomeTarefa('')          
  }

  const excluirTarefa = (id) => {
    setListaTarefas(listaTarefas.filter( tarefa => tarefa.id !== id ))
  }

  const marcarTarefa = (id) => {
    setListaTarefas(listaTarefas.map( tarefa => 
      tarefa.id === id ? {...tarefa, status: !tarefa.status} : tarefa
    ))
  }

  return (
    <div className="todo-container">
      <h2>Lista de Tarefas ✅</h2>
      <div className="input-container">
        <input 
          type="text"
          value={nomeTarefa}
          placeholder="Digite uma tarefa"
          onChange={(event) => setNomeTarefa(event.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>
      {listaTarefas.map( (tarefa) => (
        <li key={tarefa.id} className={tarefa.status ? 'completed' : ''}>
          {tarefa.nome}
          <div>
            <button className="complete-btn"
            onClick={() => marcarTarefa(tarefa.id)} >✔</button>
            <button className="delete-btn" onClick={() => excluirTarefa(tarefa.id)}>❌</button>
          </div>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default App