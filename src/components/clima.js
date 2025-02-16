import React, { useEffect, useState } from "react";
import { buscarClima } from "../services";
import "../styles/components/clima.css";

const Clima = ({ cidade }) => {
    const [dadosClima, setDadosClima] = useState(null); // Estado para armazenar os dados do clima da cidade fornecida
    const [erro, setErro] = useState(null); // Estado para armazenar possíveis erros ao buscar os dados do clima

    useEffect(() => {
        // Chamada da API buscaClima
        const carregarClima = async () => {
            try {
                const data = await buscarClima(cidade); // Chama a função buscarClima passando a cidade como parâmetro
                setDadosClima(data); // Atualiza o estado com os dados recebidos da API
                console.log("resposta", data);
            } catch (error) {
                setErro("Erro ao carregar dados do clima."); // Atualiza o estado de erro caso ocorra um problema
            }
        };

        carregarClima();
    }, [cidade]); // Dispara o efeito sempre que a propriedade 'cidade' for alterada
    
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
                <p className="carregando">Buscando Clima ☁️🌡️...</p> // Exibe uma frase enquanto os dados do clima não são obtidos
            )}
        </div>
    );
};

export default Clima;
