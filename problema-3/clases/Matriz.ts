

class Matriz {
  private filas: number
  private columnas: number
  private matriz: number[][] = []

  constructor(filas: number, columnas: number) {
    this.filas = filas
    this.columnas = columnas
    this.matriz = Array.from({ length: filas }, () => Array(columnas).fill(0))
  }

  agregarElemento(fila: number, columna: number, valor: number) {
    if (
      fila < 0 ||
      fila >= this.filas ||
      columna < 0 ||
      columna >= this.columnas
    ) {
      throw new Error('Índices fuera de rango')
    }
    this.matriz[fila][columna] = valor
  }

  ObtenerMayor() {
    let mayor = Number.MIN_SAFE_INTEGER
    let fila = 0
    let columna = 0
    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        if (this.matriz[i][j] > mayor) {
          mayor = this.matriz[i][j]
          fila = i
          columna = j
        }
      }
    }
    console.log(
      `El mayor valor es ${mayor} en la posición [${fila}][${columna}]`
    )
  }

  ObtenerMenor() {
    let menor = Number.MAX_SAFE_INTEGER
    let fila = 0
    let columna = 0
    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        if (this.matriz[i][j] < menor) {
          menor = this.matriz[i][j]
          fila = i
          columna = j
        }
      }
    }
    console.log(
      `El menor valor es ${menor} en la posición [${fila}][${columna}]`
    )
  }
}

export { Matriz }
