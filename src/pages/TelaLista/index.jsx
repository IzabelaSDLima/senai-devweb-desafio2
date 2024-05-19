import { useContext } from "react";
import { ReservasContext } from "../../providers/reservasProvider";
import { NavLink } from "react-router-dom";

import "./styles.css";

function TelaLista() {
  const [reservas] = useContext(ReservasContext);

  function criarLinha(reserva, index) {
    return (
      <tr key={index}>
        <td>{reserva.placaVeiculo}</td>
        <td>{reserva.nomeProprietario}</td>
        <td>{reserva.numeroApto}</td>
        <td>{reserva.blocoApto}</td>
        <td>{reserva.modeloVeiculo}</td>
        <td>{reserva.corVeiculo}</td>
        <td>{reserva.numeroVaga}</td>
      </tr>
    );
  }

  return (
    <div className="container">
      <div className="list-form">
        <div className="button-form">
          <button type="button">
            <NavLink to="/cadastro">Novo Cadastro</NavLink>
          </button>
        </div>
        <h2>Veículos Cadastrados</h2>
        <table>
          <thead>
            <tr>
              <th>Placa do veículo</th>
              <th>Nome do Proprietário</th>
              <th>Número do apartamento </th>
              <th>Bloco do apartamento</th>
              <th>Modelo do veículo</th>
              <th>Cor do veículo</th>
              <th>Número da vaga de estacionamento</th>
            </tr>
          </thead>
          <tbody id="tbody">{reservas.map(criarLinha)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default TelaLista;
