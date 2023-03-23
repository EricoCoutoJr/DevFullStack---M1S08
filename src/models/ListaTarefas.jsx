import PropTypes from 'prop-types';
import { useState } from 'react';

function ListaTarefas(props) {
  const { tarefas } = props;
  const [id, setId] = useState(0);

  function validarCampos() {
    if (id != 0 && tarefas) {
      if (tarefas.find(tarefa => tarefa.id == id)) {
        return confirm('Deseja excluir a tarefa: ' + id + ' ?');
      } else {
        alert('Este Id não existe, digite outro ID.');
        return false;
      }
    } else {
      // Neste alert ele irá adicionar a mensagem abaixo
      alert('Para deletar é necessário informar o ID');
      return false;
    }
  }
  function handleDelTarefa(event) {
    event.preventDefault();
    if (validarCampos()) {
      props.quandoDeletar(id);
    }
    setId(0);
  }

  return (
    <div className="my-5">
      <table className="table table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th className="col-1">ID</th>
            <th className="col-8">Tarefa</th>
            <th className="col-1">Executada</th>
          </tr>
        </thead>

        <tbody>
          {tarefas.map((tarefa, index) => (
            <tr key={tarefa.id}>
              <td className="">{tarefa.id}</td>
              <td className="">{tarefa.tarefa}</td>
              <td>{tarefa.efetuada == false ? 'No' : 'Yes'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          className="form-control col-1"
          placeholder="Inserir Id aqui..."
          aria-label="Inserir Id"
          type="number"
          value={id}
          onChange={evento => setId(evento.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary my-3"
          onClick={handleDelTarefa}
        >
          Deletar
        </button>
      </div>
    </div>
  );
}
ListaTarefas.propType = {
  job: PropTypes.array.isRequired,
  quandoDeletar: PropTypes.func.isRequired,
};
export default ListaTarefas;
