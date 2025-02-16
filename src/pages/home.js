import React, { useEffect } from "react";
import Relogio from "../components/relogio";
import Clima from "../components/clima";
import AppButton from "../components/appButton";
import apps from "../utils/apps";
import "../styles/pages/home.css";

function Home() {
    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event; // Aplica a animação de fundo da tela com base no movimento do mouse
            const moveX = (clientX / window.innerWidth) * 10; // Movimenta até 10px na horizontal
            const moveY = (clientY / window.innerHeight) * 10; // Movimenta até 10px na vertical
            
            // Atualiza as variáveis CSS para controlar a posição do fundo
            document.documentElement.style.setProperty("--bg-pos-x", `${50 + moveX}%`);
            document.documentElement.style.setProperty("--bg-pos-y", `${50 + moveY}%`);
        };

        window.addEventListener("mousemove", handleMouseMove); // Adiciona o evento de movimento do mouse para animar o fundo

        return () => {
            window.removeEventListener("mousemove", handleMouseMove); // Remove o evento ao desmontar o componente para evitar vazamento de memória
        };
    }, []);

    return (
        <div className="home">
            {/* Container superior que agrupa o relógio e a previsão do tempo */}
            <div className="info-container">
                <Relogio />
                <button
                    className="clima-button"
                    onClick={() => window.open("https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=-23.5640&lon=-46.8896&zoom=6", "_blank")}
                >
                    <Clima cidade="São Paulo" />
                </button>
            </div>

            {/* Container dos botões de aplicativos */}
            <div className="container">
                {apps.map((app, index) => (
                    <AppButton key={index} data={app} />
                ))}
            </div>
        </div>
    );
}

export default Home;
