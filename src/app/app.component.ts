import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'porfolio-angular';
  constructor( public infoPaginaService: InfoPaginaService) {
 // INYECCION DE DEPENDENCIA DEL SERVICIO
  }
}
