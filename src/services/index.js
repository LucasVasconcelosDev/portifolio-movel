export const fetchWeather = async (cityId) => {
    try {
      const response = await fetch(`https://www.metaweather.com/api/location/${cityId}/`);
      console.log(response);
      if (!response.ok) {
        throw new Error('Erro ao buscar dados do clima');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
  };