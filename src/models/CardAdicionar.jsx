import { useState } from 'react';
import PropTypes from 'prop-types';

function CardAdicionar(props) {
  const [tarefa, setTarefa] = useState('');
  const [efetuada, setEfetuada] = useState(false);

  function validarCampos() {
    let msn = '';
    if (tarefa) {
      return true;
    } else {
      // Neste alert ele irá adicionar a mensagem abaixo
      alert('Para adicionar necessário informar a tarefa');
      return false;
    }
  }
  function handleAddTarefa(event) {
    event.preventDefault();
    const id = 0;
    if (validarCampos()) {
      const job = {
        id: id,
        tarefa: tarefa,
        efetuada: efetuada,
      };
      // Executando a função recebida pela props
      // para adicionar a 'negociacao' e enviada pelo App
      props.quandoAdicionar(job);

      // Depois de enviar os valores dos inputs para
      // dentro do objeto negociação é necessário zerá-los
      setTarefa('');
    }
  }

  return (
    <form>
      <div className="row mb-4 container text-center">
        <h3 className="p-3 bg-secondary text-white">Inserir Tarefas</h3>
        <div className="col-10">
          <input
            className="form-control"
            placeholder="Inserir tarefa aqui..."
            aria-label="Inserir Tarefa"
            type="text"
            value={tarefa}
            onChange={evento => setTarefa(evento.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleAddTarefa}
          >
            Adicionar
          </button>
        </div>
      </div>
    </form>
  );
}

CardAdicionar.propType = {
  quandoAdicionar: PropTypes.func.isRequired,
};

export default CardAdicionar;
