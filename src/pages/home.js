import React from "react";
import Relogio from "../components/relogio";
import Clima from "../components/clima";

function Home() {

    const cidade = "São Paulo";

    return (
        <div>
            <h1>Portfólio Móvel</h1>
            <Relogio />
            <Clima cidade={cidade} />
        </div>
    );
}

export default Home;
