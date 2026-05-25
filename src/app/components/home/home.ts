import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


}

const usuarios = [
  { id: 1, nombre: 'Ana', edad: 22, activo: true },
  { id: 2, nombre: 'Luis', edad: 17, activo: false },
  { id: 3, nombre: 'Carlos', edad: 30, activo: true },
  { id: 4, nombre: 'Marta', edad: 25, activo: false }
];

  const frases = usuarios.map(usuario => `${usuario.nombre} tiene ${usuario.edad} años`);
  const nombres = usuarios.map(usuario => usuario.nombre);

console.log(frases);
console.log(nombres);

// Resultado: ["Ana tiene 22 años", "Luis tiene 17 años", ...]
