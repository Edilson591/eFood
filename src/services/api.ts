export async function getFood() {
    try {
        const response = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        if(!response.ok){
            throw new Error("Error ao Busca dados");
        }
        return await response.json()
    } catch (error) {
        console.error("Error", error)
        return[]
    }
}