import { TipoCarta } from '../types/TipoCarta'
import { ValorCarta } from '../types/ValorCarta'

class Carta {
  tipo: TipoCarta
  valor: ValorCarta

  constructor(tipo: TipoCarta, valor: ValorCarta) {
    this.tipo = tipo
    this.valor = valor
  }

  toString(): string {
    return `${this.valor} de ${this.tipo}`
  }
}

export { Carta }
