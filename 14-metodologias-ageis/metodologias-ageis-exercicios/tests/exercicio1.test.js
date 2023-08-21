import { anoBissexto } from "../src/index.js"

describe("Testes do Exercício 1", () => {

  test("Retornar BISSEXTO/NÃO BISSEXTO/INVALID", () => {
    const response = anoBissexto(2024)
    const response2 = anoBissexto(2025)
    const response3 = anoBissexto(-1234)
    expect(response).toBe("TRUE")
    expect(response2).toBe("FALSE")
    expect(response3).toBe("INVALID")
  })
})