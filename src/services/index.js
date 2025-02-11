const API_URL = process.env.REACT_APP_API_URL;

export const buscarClima = async (cidade) => {
    try {
        const response = await fetch(`${API_URL}/clima?cidade=${cidade}`);
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar clima:", error);
        return null;
    }
};
