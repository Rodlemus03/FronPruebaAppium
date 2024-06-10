import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  textoInput1: string = '';
  textoInput2: string = '';


  mostrarTexto() {
    console.log('Texto del primer input:', this.textoInput1);
    console.log('Texto del segundo input:', this.textoInput2);
  }}
