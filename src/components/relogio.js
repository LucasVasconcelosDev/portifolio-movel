import React, { useState, useEffect } from "react";
import "../styles/components/relogio.css";

const Relogio = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Formatar a hora e os minutos separadamente
  const formatHours = time.getHours().toString().padStart(2, "0");
  const formatMinutes = time.getMinutes().toString().padStart(2, "0");

// Formatar a data no estilo "dom. 16 de fev."
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
