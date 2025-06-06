import { Carta } from './Carta'
import { TipoCarta } from '../types/TipoCarta'
import { ValorCarta } from '../types/ValorCarta'

class Baraja {
  cartas: Carta[] = []

  private tipos: TipoCarta[] = ['corazones', 'diamantes', 'tréboles', 'picas']
  private valores: ValorCarta[] = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K'
  ]

  constructor() {
    this.inicializarBaraja()
  }

  private inicializarBaraja(): void {
    for (const tipo of this.tipos) {
      for (const valor of this.valores) {
        const carta = new Carta(tipo, valor)
        this.cartas.push(carta)
      }
    }
  }

  barajar(): void {
    for (let i = this.cartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]]
    }
  }

  repartir(): Carta | string {
    return this.cartas.length > 0
      ? this.cartas.pop()!
      : 'No hay cartas para repartir'
  }

  reiniciarBaraja(): void {
    this.cartas = []
    this.inicializarBaraja()
  }

  toString(): string {
    return this.cartas.length > 0
      ? this.cartas.map((carta) => carta.toString()).join(', ')
      : 'La baraja está vacía'
  }
}

export { Baraja }
