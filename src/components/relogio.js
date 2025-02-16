import React, { useState, useEffect } from "react";
import "../styles/components/relogio.css";

const Relogio = () => {
  // Estado para armazenar a hora atual, inicializado com a data e hora do momento
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000); // Cria um intervalo que atualiza o estado 'time' a cada segundo
    return () => clearInterval(interval); // Remove o intervalo quando o componente for desmontado para evitar vazamento de memória
  }, []);

  // Formata as horas e minutos para sempre terem dois dígitos (ex: "09" em vez de "9")
  const formatHours = time.getHours().toString().padStart(2, "0");
  const formatMinutes = time.getMinutes().toString().padStart(2, "0");

  // Formata a data no estilo semana/dia/mês, ex: "dom. 16 de fev."
  const options = { weekday: "short", day: "numeric", month: "short" };
  const formatDate = time.toLocaleDateString("pt-BR", options).replace(",", "");

  return (
    <div className="relogio-container">
      <div className="hora">
        <span className="hora-grande">{formatHours}</span>
        <span className="hora-grande">{formatMinutes}</span>
      </div>
      <p className="data">{formatDate}</p>
    </div>
  );
};

export default Relogio;
