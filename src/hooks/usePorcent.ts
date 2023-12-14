const convertPriceToNumber = (priceString: string | undefined): number => {
  if (typeof priceString === 'string') {
    const numericString = priceString.replace(/[^\d,]/g, '')
    const normalizedString = numericString.replace(',', '.')
    const parsedNumber = parseFloat(normalizedString)
    if (!isNaN(parsedNumber)) {
      return parsedNumber
    }
  }
  return 0
}

export function porcentagem(valor1: string, valor2: string) {
  const preco: number = convertPriceToNumber(valor1)
  const preco2: number = convertPriceToNumber(valor2)
  const diferenca = preco - preco2

  const discountPercentage = (diferenca / preco) * 100
  return Math.floor(discountPercentage)
}
