import React from "react";
import Relogio from "../components/relogio";
import Clima from "../components/clima";
import AppButton from "../components/appButton";
import apps from "../utils/apps";
import "../styles/pages/home.css";

function Home() {
    const cidade = "São Paulo";

    return (
        <div>
            <h1>Portfólio Móvel</h1>
            <Relogio />
            <Clima cidade={cidade} />
            <div className= "container">
                {apps.map((app, index) => (
                    <AppButton key={index} data={app} />
                ))}
            </div>
        </div>
    );
}

export default Home;
