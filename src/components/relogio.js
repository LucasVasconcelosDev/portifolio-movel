import React, { useState, useEffect } from "react";
import { buscarHorarioBrasilia } from "../services"; // Importa a função que busca o horário da API

function Relogio() {
    const [horario, setHorario] = useState(null); // Estado para armazenar o horário

    useEffect(() => {
        const iniciarRelogio = async () => {
            // Busca o horário atual da API
            const horaAtual = await buscarHorarioBrasilia();
            
            // Converte a string "hh:mm:ss" em valores numéricos
            const [h, m, s] = horaAtual.split(":").map(Number);
            
            // Cria um novo objeto Date com o horário correto
            const agora = new Date();
            agora.setHours(h, m, s);

            setHorario(agora); // Atualiza o estado com o horário inicial
        };

        iniciarRelogio(); // Chama a função para pegar o horário assim que o componente é montado

        // Cria um intervalo que adiciona 1 segundo ao horário atual a cada 1000ms (1s)
        const intervalo = setInterval(() => {
            setHorario((prevHorario) => {
                if (!prevHorario) return prevHorario; // Se o horário ainda não foi definido, mantém o estado atual
                const novoHorario = new Date(prevHorario.getTime() + 1000); // Adiciona 1 segundo ao horário atual
                return novoHorario; // Retorna o novo horário atualizado
            });
        }, 1000);

        return () => clearInterval(intervalo); // Limpa o intervalo quando o componente for desmontado
    }, []);

    return (
        <div>
            <h2>Horário de Brasília</h2>
            <p>{horario ? horario.toLocaleTimeString("pt-BR") : "Carregando..."}</p> 
            {/* Exibe o horário formatado ou "Carregando..." se ainda não tiver sido carregado */}
        </div>
    );
}

export default Relogio;
