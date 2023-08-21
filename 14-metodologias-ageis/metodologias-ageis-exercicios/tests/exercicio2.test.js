import { pedraPapelTesoura } from "../src/index.js"

describe("Testes do Exercício 3", () => {
  test("Retornar PEDRA,PAPEL ou TESOURA", () => {
    expect.assertions(1)
    const response = pedraPapelTesoura()
    if (response === "PEDRA") {
      expect(response).toBe("PEDRA")
    }
    if (response === "PAPEL") {
      expect(response).toBe("PAPEL")
    }
    if (response === "TESOURA") {
      expect(response).toBe("TESOURA")
    }
  })
})
