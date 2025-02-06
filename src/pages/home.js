import React from "react";
import Relogio from "../components/relogio";
import Clima from "../components/clima";

function Home() {

    const saoPauloCityId = 455827;

    return (
        <div>
            <h1>Portfólio Móvel</h1>
            <Relogio />
            <Clima cityId={saoPauloCityId} />
        </div>
    );
}

export default Home;
