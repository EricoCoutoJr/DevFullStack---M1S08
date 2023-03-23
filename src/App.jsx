import './App.css';
import { useState } from 'react';
import CardAdicionar from './models/CardAdicionar';
import ListaTarefas from './models/ListaTarefas';

function App() {
  const [tarefas, setTarefas] = useState([]);

  function addTarefa(tarefa) {
    tarefa.id = tarefas.length + 1;
    setTarefas([...tarefas, tarefa]);
  }

  function dropTarefa(id) {
    if (id > 0) {
      const index = tarefas.findIndex(tarefa => tarefa.id == id);
      tarefas.splice(index, 1);
      // a linha abaixo atualiza os IDs para não haver duplicidade
      // usando como referência o index do array tarefas
      tarefas.map((tarefa, index) => {
        tarefa.id = index + 1;
      });
    }
  }

  // function atualizarIds() {
  //   return tarefas.map((tarefa, index) => {
  //     return { ...tarefa, id: index + 1 };
  //   });
  // }

  return (
    <div>
      <CardAdicionar quandoAdicionar={addTarefa} />
      <ListaTarefas tarefas={tarefas} quandoDeletar={dropTarefa} />
    </div>
  );
}

export default App;
