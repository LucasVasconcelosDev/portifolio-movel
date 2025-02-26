import React, { useEffect, useState } from "react";
import Relogio from "../components/relogio";
import Clima from "../components/clima";
import AppButton from "../components/appButton";
import apps from "../utils/apps";
import WebModal from "../utils/webmodal";
import { obterLocalizacao } from "../utils/localizacao";
import "../styles/pages/home.css";

function Home() {
    const [coordenadas, setCoordenadas] = useState({ latitude: -23.5640, longitude: -46.8896 }); // Coordenadas para URL

    // Atualiza a posição do fundo da tela ao mover o mouse
    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const moveX = (clientX / window.innerWidth) * 10;
        const moveY = (clientY / window.innerHeight) * 10;
        document.documentElement.style.setProperty("--bg-pos-x", `${50 + moveX}%`);
        document.documentElement.style.setProperty("--bg-pos-y", `${50 + moveY}%`);
    };

    // Obtém a localização do usuário e atualiza as coordenadas
    const atualizarCoordenadas = async () => {
        try {
            const { latitude, longitude } = await obterLocalizacao();
            setCoordenadas({ latitude, longitude });
        } catch (error) {
            console.log("Usando coordenadas padrão devido a erro na localização.");
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove); // Adiciona o evento de movimento do mouse
        atualizarCoordenadas(); // Obtém as coordenadas ao montar o componente
        return () => {
            window.removeEventListener("mousemove", handleMouseMove); // Remove o evento ao desmontar o componente
        };
    }, []);

    return (
        <div className="home">
            {/* Container superior que agrupa o relógio e a previsão do tempo */}
            <div className="widget">
                <Relogio />
                <button
                    className="clima-button"
                    onClick={() => WebModal(`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=${coordenadas.latitude}&lon=${coordenadas.longitude}&zoom=6`)}
                >
                    <Clima />
                </button>
            </div>

            {/* Container dos botões de aplicativos */}
            <div className="app-container">
                {apps.map((app, index) => (
                    <AppButton key={index} data={app} />
                ))}
            </div>
        </div>
    );
}

export default Home;