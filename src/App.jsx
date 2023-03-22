import './App.css';
import { useState } from 'react';
import CardAdicionar from './models/CardAdicionar';
import ListaTarefas from './models/ListaTarefas';

function App() {
  const [tarefas, setTarefas] = useState([]);

  function addTarefa(tarefa) {
    setTarefas([...tarefas, tarefa]);
  }

  return (
    <div>
      <CardAdicionar quandoAdicionar={addTarefa} />
      <ListaTarefas tarefas={tarefas} />
    </div>
  );
}

export default App;
