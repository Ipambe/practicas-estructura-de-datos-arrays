import readline from 'node:readline/promises'
import { Estudiante } from './Estudiante'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

class GestorEstudiantes {
  private estudiantes: Estudiante[] = []

  agregar(estudiante: Estudiante): void {
    this.estudiantes.push(estudiante)
  }

  buscar(matricula: string): Estudiante | undefined {
    return this.estudiantes.find((e) => e.matricula === matricula)
  }

  modificar(
    matricula: string,
    datos: Partial<Omit<Estudiante, 'matricula'>>
  ): boolean {
    const estudiante = this.buscar(matricula)
    if (estudiante) {
      Object.assign(estudiante, datos)
      return true
    }
    return false
  }

  eliminar(matricula: string): boolean {
    const index = this.estudiantes.findIndex((e) => e.matricula === matricula)
    if (index !== -1) {
      this.estudiantes.splice(index, 1)
      return true
    }
    return false
  }

  mostrarTodos(): void {
    this.estudiantes.forEach((estudiante) => {
      console.log(estudiante.toString())
    })
  }

  async mostrarMenu() {
    console.log('\n--- Menú Gestor de Estudiantes ---')
    console.log('1. Agregar estudiante')
    console.log('2. Buscar estudiante')
    console.log('3. Modificar estudiante')
    console.log('4. Eliminar estudiante')
    console.log('5. Mostrar todos los estudiantes')
    console.log('6. Salir')
    const opcion = await rl.question('Elige una opción: ')
    this.procesarOpcion(opcion)
  }

  private async procesarOpcion(opcion: string) {
    switch (opcion) {
      case '1':
        const matricula = await rl.question('Ingrese matrícula: ')
        const nombre = await rl.question('Ingrese nombre: ')
        const apellido = await rl.question('Ingrese apellido: ')
        const telefono = await rl.question('Ingrese teléfono: ')
        const correo = await rl.question('Ingrese correo: ')
        const carrera = await rl.question('Ingrese la carrera: ')
        const grado = await rl.question('Ingrese el grado: ')
        const nuevoEstudiante = new Estudiante(
          matricula,
          nombre,
          apellido,
          telefono,
          correo,
          carrera,
          grado
        )
        this.agregar(nuevoEstudiante)
        console.log('Estudiante agregado.')
        break
      case '2': {
        const matricula = await rl.question('Ingrese matrícula a buscar: ')
        const estudiante = this.buscar(matricula)
        if (estudiante)
          console.log('Estudiante encontrado:', estudiante.toString())
        else console.log('Estudiante no encontrado.')

        break
      }
      case '3': {
        const matricula = await rl.question('Ingrese matrícula a modificar: ')
        const estudiante = this.buscar(matricula)
        if (!estudiante) {
          console.log('Estudiante no encontrado.')
          break
        }

        const editarEstudiante: Partial<Omit<Estudiante, 'matricula'>> = {}

        editarEstudiante.nombre = await rl.question(
          `Ingrese nuevo nombre o presione Enter para omitir (actual: ${estudiante.nombre}): `
        )
        editarEstudiante.apellido = await rl.question(
          `Ingrese nuevo apellido o presione Enter para omitir (actual: ${estudiante.apellido}): `
        )
        editarEstudiante.telefono = await rl.question(
          `Ingrese nuevo teléfono o presione Enter para omitir (actual: ${estudiante.telefono}): `
        )
        editarEstudiante.correo = await rl.question(
          `Ingrese nuevo correo o presione Enter para omitir (actual: ${estudiante.correo}): `
        )
        editarEstudiante.carrera = await rl.question(
          `Ingrese nueva carrera o presione Enter para omitir (actual: ${estudiante.carrera}): `
        )
        editarEstudiante.grado = await rl.question(
          `Ingrese nuevo grado o presione Enter para omitir (actual: ${estudiante.grado}): `
        )

        const modificado = this.modificar(matricula, editarEstudiante)
        if (modificado) {
          console.log('Estudiante modificado.')
        } else {
          console.log(
            'Error al modificar el estudiante. Matrícula no encontrada.'
          )
        }
        break
      }
      case '4': {
        const matricula = await rl.question('Ingrese matrícula a eliminar: ')
        const eliminado = this.eliminar(matricula)
        if (eliminado) console.log('Estudiante eliminado.')
        else
          console.log(
            'Error al eliminar el estudiante. Matrícula no encontrada.'
          )

        break
      }
      case '5':
        this.mostrarTodos()
        break
      case '6':
        console.log('Saliendo del gestor de estudiantes...')
        rl.close()
        return
      default:
        console.log('Opción desconocida. Por favor, elige una opción válida.')
    }
    await this.mostrarMenu()
  }
}

export { GestorEstudiantes }
