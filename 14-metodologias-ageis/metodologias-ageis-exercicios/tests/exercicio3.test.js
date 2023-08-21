import { checkNumeroPrimo } from "../src/index.js"

describe("Testes do Exercício 4", () => {

  test("Retornar PRIMO/NÃO PRIMO/INVALID", () => {
    const response = checkNumeroPrimo(13)
    const response2 = checkNumeroPrimo(12)
    const response3 = checkNumeroPrimo(1)
    expect(response).toBe("TRUE")
    expect(response2).toBe("FALSE")
    expect(response3).toBe("INVALID")
  })
})