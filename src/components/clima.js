import React, { useEffect, useState } from "react";
import { buscarClima } from "../services";
import "../styles/components/clima.css";

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

    // Função para arredondar a temperatura
    const arredondarTemperatura = (temp) => Math.round(temp);

    return (
        <div className="clima-card">
            {erro && <p className="erro">{erro}</p>}
            {dadosClima ? (
                <>
                    <div className="clima-info">
                        <img src={dadosClima.icone} alt="Ícone do clima" className="clima-icone" />
                        <span className="clima-temperatura">
                            {arredondarTemperatura(dadosClima.temperatura)}°
                        </span>
                    </div>
                    <p className="clima-descricao">{dadosClima.descricao}</p>
                    <p className="clima-cidade">{dadosClima.cidade}</p>
                </>
            ) : (
                <p className="carregando">Carregando...</p>
            )}
        </div>
    );
};

export default Clima;
