import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

// Função para buscar o clima com base nas coordenadas
export const buscarClima = async (lat, lon) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt`;
        const response = await axios.get(url);

        return {
            cidade: response.data.name,
            temperatura: response.data.main.temp,
            descricao: response.data.weather[0].description,
            icone: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
        };
    } catch (error) {
        throw new Error("Erro ao obter os dados do clima");
    }
};