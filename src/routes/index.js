import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home.js";

//adcione as rotas se o projeto possuir mais de uma pagina
function Rotas() {
    return (
        <BrowserRouter>
          <Routes>
          <Route path="/" Component={Home}/>
          </Routes>
      </BrowserRouter>
    );
  }
  
  export default Rotas;