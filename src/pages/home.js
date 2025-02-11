import React, { useState } from "react";
import Relogio from "../components/relogio";
import Clima from "../components/clima";
import WebModal from "../components/webmodal";

function Home() {
    const cidade = "São Paulo";
    const [isModalOpen, setModalOpen] = useState(false);
    const linkedin = "https://www.linkedin.com/in/lucas-vasconcelos-1a030920a/";

    return (
        <div>
            <h1>Portfólio Móvel</h1>
            <Relogio />
            <Clima cidade={cidade} />
            <button onClick={() => setModalOpen(true)}>Abrir Link</button>
            {isModalOpen && (
                <WebModal url={linkedin} onClose={() => setModalOpen(false)} />
            )}
        </div>
    );
}

export default Home;
