import React, { useEffect, useState } from "react";
import { buscarClima } from "../services";

const Clima = ({ cidade }) => {
    const [dadosClima, setDadosClima] = useState(null);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const carregarClima = async () => {
            try {
                const data = await buscarClima(cidade);
                setDadosClima(data);
                console.log("resposta", data);
            } catch (error) {
                setErro("Erro ao carregar dados do clima.");
            }
        };

        carregarClima();
    }, [cidade]);

    return (
        <div style={styles.card}>
            {erro && <p>{erro}</p>}
            {dadosClima ? (
                <>
                    <h2>Clima em {dadosClima.cidade}</h2>
                    <p>Temperatura: {dadosClima.temperatura}°C</p>
                    <p>Descrição: {dadosClima.descricao}</p>
                    <img src={dadosClima.icone} alt="Ícone do clima" />
                </>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};


const styles = {
    card: {
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px",
        width: "250px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    },
};

export default Clima;
