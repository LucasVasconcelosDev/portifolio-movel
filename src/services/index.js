// Função para buscar o horário de Brasília usando a API WorldTimeAPI
export const buscarHorarioBrasilia = async () => {
    try {
        // Faz a requisição para a API que retorna o horário da região "America/Sao_Paulo"
        const response = await fetch("https://worldtimeapi.org/api/timezone/America/Sao_Paulo");

        // Converte a resposta para JSON
        const data = await response.json();

        // Extrai a data e hora no formato ISO e converte para um horário legível
        return new Date(data.datetime).toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    } catch (error) {
        // Captura e exibe qualquer erro que ocorrer na requisição
        console.error("Erro ao buscar horário:", error);

        // Retorna uma mensagem de erro para ser exibida na interface
        return "Erro ao carregar horário";
    }
};
