import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano';

  /* metodo que recibe un parametro numero de tipo number y no regresa nada */
  aplicarSonido(numero: number): void {
    //Creamos una instancia de audio
    const audio = new Audio();
    //la ruta del archivo de audio que ejecutara "note#.wav". El # se concatena con el numero que
    //se enviara del html segun en la linea que se de clic
    audio.src ="../assets/sonidos/note" + numero + '.wav'; 
    audio.load(); //carga el audio
    audio.play(); //ejecuta el audio
  }
}
