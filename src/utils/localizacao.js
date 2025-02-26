// Coordenadas padrão de São Paulo
const Default = {
    latitude: -23.5505,
    longitude: -46.6333,
};

// Obtém a localização do usuário
export const obterLocalizacao = () => {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude }); // Retorna as coordenadas do usuário
                },
                (error) => {
                    console.log("Permissão negada ou erro ao obter localização. Usando coordenadas padrão.");
                    resolve(Default); // Retorna as coordenadas padrão em caso de erro
                }
            );
        } else {
            console.log("Geolocalização não suportada pelo navegador. Usando coordenadas padrão.");
            resolve(Default); // Retorna as coordenadas padrão se a geolocalização não for suportada
        }
    });
};