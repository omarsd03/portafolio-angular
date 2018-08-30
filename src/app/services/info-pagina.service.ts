import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) { 
    //console.log('Servicio de infoPagina listo');
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    //Leer el archivo JSON
    this.http.get('assets/data/data-paginas.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    //Leer el archivo JSON
    this.http
      .get("https://angular-html-b727e.firebaseio.com/equipo.json")
      .subscribe( (resp: any[]) => {
        this.equipo = resp;
        //console.log(resp);
      });
  }

}
