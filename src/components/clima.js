import React, { useEffect, useState } from "react";
import { buscarClima } from "../services";
import { obterLocalizacao } from "../utils/localizacao";
import "../styles/components/clima.css";

const Clima = () => {
    const [dadosClima, setDadosClima] = useState(null); // Estado para armazenar os dados do clima
    const [erro, setErro] = useState(null); // Estado para armazenar possíveis erros

    // Obtém a localização e busca os dados do clima
    const carregarClima = async () => {
        try {
            const { latitude, longitude } = await obterLocalizacao(); // Obtém as coordenadas
            const data = await buscarClima(latitude, longitude); // Busca os dados do clima
            setDadosClima(data); // Atualiza o estado com os dados recebidos
        } catch (error) {
            console.error("Erro ao carregar dados do clima:", error);
            setErro("Erro ao carregar dados do clima.");
        }
    };

    useEffect(() => {
        carregarClima(); // Obtém a localização e busca os dados do clima ao montar o componente
    }, []);

    const arredondarTemperatura = (temp) => Math.round(temp); // Função para arredondar a temperatura

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
                <p className="carregando">Buscando Clima ☁️🌡️...</p>
            )}
        </div>
    );
};

export default Clima;