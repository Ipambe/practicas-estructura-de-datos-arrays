class Estudiante {
  constructor(
    public matricula: string,
    public nombre: string,
    public apellido: string,
    public telefono: string,
    public correo: string,
    public carrera: string,
    public grado: string
  ) {}

  toString(): string {
    return `Matricula: ${this.matricula}, Nombre: ${this.nombre} ${this.apellido}, Telefono: ${this.telefono}, Correo: ${this.correo}, Carrera: ${this.carrera}, Grado: ${this.grado}`
  }
}

export { Estudiante }
