import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
    info: any = {};
    cargada: boolean = false;
    listaPersonas: any = []; 

  constructor( private http:HttpClient ){
    this.cargaInfo();
    this.cargaAbout();
   };

   private cargaInfo(){
      this.http.get('assets/data/dataPage.json').subscribe((resp) => {
        this.cargada = true;
        this.info = resp; 
        console.log(resp);
      }
    )
  } 

   private cargaAbout(){
        this.http.get('https://web-app-angular-7bb89-default-rtdb.europe-west1.firebasedatabase.app/equip.json').subscribe((resp) => {
          this.cargada = true;
          this.listaPersonas = resp; 
          console.log(resp);
        }
        )
      }
    }
 



