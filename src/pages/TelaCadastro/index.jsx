
import { useContext } from "react";
import "./styles.css";

import { ReservasContext } from "../../providers/reservasProvider";
import { NavLink } from "react-router-dom";

function TelaCadastro() {
  const [, adicionarReserva] = useContext(ReservasContext)

  function salvar(event) {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
  
    adicionarReserva(formJson)

    alert("Cadastro realizado com sucesso!");
  
    form.reset();
  }

  return (
    <div className="container">
      <form className="login-form" onSubmit={salvar} method="post">
        <h2>Cadastro do Veículo</h2>
        <div className="input-group">
          <label htmlFor="placaVeiculo">Placa do veículo:</label>
          <input type="text" name="placaVeiculo" />
        </div>
        <div className="input-group">
          <label htmlFor="nomeProprietario">Nome do proprietário:</label>
          <input type="text" name="nomeProprietario" />
        </div>
        <div className="input-group">
          <label htmlFor="numeroApto">Número do apartamento:</label>
          <input type="text" name="numeroApto" />
        </div>
        <div className="input-group">
          <label htmlFor="blocoApto">Bloco do apartamento:</label>
          <input type="text" name="blocoApto" />
        </div>
        <div className="input-group">
          <label htmlFor="modeloVeiculo">Modelo do veículo:</label>
          <input type="text" name="modeloVeiculo" />
        </div>
        <div className="input-group">
          <label htmlFor="corVeiculo">Cor do veículo:</label>
          <input type="text" name="corVeiculo" />
        </div>
        <div className="input-group">
          <label htmlFor="numeroVaga">Número da vaga:</label>
          <input type="text" name="numeroVaga" />
        </div>
        <div className="button-group">
          <button type="submit">Salvar</button>
          <button type="button">
            <NavLink to='/lista'>Ver lista</NavLink>
          </button>
        </div>
      </form>
    </div>
  );
}

export default TelaCadastro;
