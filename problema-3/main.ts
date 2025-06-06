import readLine from 'node:readline/promises'
import { Matriz } from './clases/Matriz'

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

const main = async () => {
  const filas = parseInt(
    await rl.question('Ingrese el número de filas de la matriz: ')
  )
  const columnas = parseInt(
    await rl.question('Ingrese el número de columnas de la matriz: ')
  )

  if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
    console.error('Número de filas y columnas debe ser un entero positivo.')
    rl.close()
    return
  }

  const matriz = new Matriz(filas, columnas)

  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      const valor = parseInt(
        await rl.question(`Ingrese el valor para la posición [${i}][${j}]: `)
      )
      if (isNaN(valor)) {
        console.warn('Valor no válido, se asignará 0 por defecto.')
        matriz.agregarElemento(i, j, 0)
        continue
      }
      matriz.agregarElemento(i, j, valor)
    }
  }

  matriz.ObtenerMayor()
  matriz.ObtenerMenor()

  rl.close()
  console.log('Operaciones completadas.')
}

main()
