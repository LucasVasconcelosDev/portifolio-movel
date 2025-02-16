import React, { useEffect } from "react";
import Relogio from "../components/relogio";
import Clima from "../components/clima";
import AppButton from "../components/appButton";
import apps from "../utils/apps";
import "../styles/pages/home.css";

function Home() {
    useEffect(() => {
        const handleMouseMove = (event) => {
            //aplica a animação de fundo da tela
            const { clientX, clientY } = event;
            const moveX = (clientX / window.innerWidth) * 10; // Movimenta até 10px
            const moveY = (clientY / window.innerHeight) * 10;
            
            document.documentElement.style.setProperty("--bg-pos-x", `${50 + moveX}%`);
            document.documentElement.style.setProperty("--bg-pos-y", `${50 + moveY}%`);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="home">
            <div className="info-container">
                <Relogio />
                <button
                    className="clima-button"
                    onClick={() => window.open("https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=-23.5640&lon=-46.8896&zoom=6", "_blank")}
                >
                    <Clima cidade="São Paulo" />
                </button>
            </div>
            <div className="container">
                {apps.map((app, index) => (
                    <AppButton key={index} data={app} />
                ))}
            </div>
        </div>
    );
}

export default Home;
