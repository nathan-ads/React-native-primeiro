const api_host = 'https://dattebayo-api.onrender.com';

export async function fetchPersonagens() {
    try {
        const response = await fetch(`${api_host}/characters`)

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`)
        }

        return await response.json;
    } catch (error) {
        console.error(`Erro ao buscar personagens: ${error}`)
        return [];
    }
}