import React from "react";
import Relogio from "../components/relogio";
import Clima from "../components/clima";
import WebModal from "../utils/webmodal";

function Home() {
    const cidade = "São Paulo";
    const linkedin = "https://www.linkedin.com/in/lucas-vasconcelos-1a030920a/";

    return (
        <div>
            <h1>Portfólio Móvel</h1>
            <Relogio />
            <Clima cidade={cidade} />
            <button onClick={() => WebModal(linkedin)}>Abrir Link</button>
        </div>
    );
}

export default Home;
