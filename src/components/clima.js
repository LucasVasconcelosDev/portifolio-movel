import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../services';

const Clima = ({ cityId }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeather(cityId);
        setWeather(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getWeather();
  }, [cityId]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      <h2>Previsão do Tempo para {weather.title}</h2>
      <p>Temperatura: {weather.consolidated_weather[0].the_temp.toFixed(1)}°C</p>
      <p>Condição: {weather.consolidated_weather[0].weather_state_name}</p>
    </div>
  );
};

export default Clima;