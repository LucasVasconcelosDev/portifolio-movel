const fetchClima = async (cidade) => {
    try {
        const response = await fetch(`http://localhost:5000/clima?cidade=${cidade}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Erro ao buscar clima:", error);
    }
};

// fazer o .env quando hospedar o back-end

fetchClima("São Paulo");
