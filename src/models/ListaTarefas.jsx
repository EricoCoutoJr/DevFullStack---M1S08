import PropTypes from 'prop-types';

function ListaTarefas(props) {
  const { tarefas } = props;

  return (
    <div className="my-5">
      <table className="table table-hover table-bordered">
        <thead className="table-primary">
          <tr>
            <th>Tarefa</th>
            <th>Executada</th>
          </tr>
        </thead>

        <tbody>
          {tarefas.map((tarefa, index) => (
            <tr key={tarefa.id}>
              <td>{tarefa.tarefa}</td>
              <td>{tarefa.efetuada == false ? 'No' : 'Yes'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
ListaTarefas.propType = {
  jobs: PropTypes.array.isRequired,
};
export default ListaTarefas;
