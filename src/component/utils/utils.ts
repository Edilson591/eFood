export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("pt-Br", {
        style: "currency",
        currency: "BRL",
    }).format(price)
} 