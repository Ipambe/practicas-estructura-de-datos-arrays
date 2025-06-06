import readline from 'node:readline'
import { Baraja } from './Baraja'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

class Juego {
  private baraja: Baraja

  constructor() {
    this.baraja = new Baraja()
  }

  mostrarMenu() {
    console.log('\n--- Menú ---')
    console.log('1. Barajar')
    console.log('2. Repartir carta')
    console.log('3. Mostrar baraja')
    console.log('4. Reiniciar baraja')
    console.log('5. Salir')
    rl.question('Elige una opción: ', (opcion: string) => {
      this.procesarOpcion(opcion)
    })
  }

  private procesarOpcion(opcion: string) {
    switch (opcion) {
      case '1':
        this.baraja.barajar()
        console.log('La baraja ha sido mezclada.')
        this.mostrarMenu()
        break
      case '2':
        const carta = this.baraja.repartir()
        console.log('Carta repartida:', carta.toString())
        this.mostrarMenu()
        break
      case '3':
        console.log('Baraja actual:')
        console.log(this.baraja.toString())
        this.mostrarMenu()
        break
      case '4':
        this.baraja.reiniciarBaraja()
        console.log('La baraja ha sido reiniciada.')
        this.mostrarMenu()
        break
      case '5':
        console.log('Nos vemos pronto...')
        rl.close()
        break
      default:
        console.log('Opción desconocida. Por favor, elige una opción válida.')
        this.mostrarMenu()
        break
    }
  }
}
export { Juego }
