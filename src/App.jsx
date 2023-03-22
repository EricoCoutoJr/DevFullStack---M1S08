import './App.css';
import { useState } from 'react';
import CardAdicionar from './models/CardAdicionar';

function App() {
  const [tarefas, setTarefas] = useState([]);

  function addTarefa(tarefa) {
    setTarefas([...tarefas, tarefa]);
  }

  return (
    <div>
      <CardAdicionar />
    </div>
  );
}

export default App;
