import React, { createContext, useState } from "react";

export const ReservasContext = createContext();

export const ReservasProvider = (props) => {
  const [reservas, setReservas] = useState([]);

  function adicionarReserva(reserva) {
    setReservas([...reservas, reserva])
  }

  return (
    <ReservasContext.Provider value={[reservas, adicionarReserva]}>
      {props.children}
    </ReservasContext.Provider>
  );
};
