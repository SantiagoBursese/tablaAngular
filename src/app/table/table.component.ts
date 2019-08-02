import { Component, OnInit } from '@angular/core';
import { ObtenerArregloService } from '../obtener-arreglo.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  registro:any;
  vehiculos:Array<any>;

  getVehiculos():void{
    this.vehiculos = this.servicio.getVehiculos();
  }

  categoriaLinea(registro:any,velocidadInf:number,velocidadSup:number):String{
    if(registro.velocidad >= velocidadSup)
      return 'text-danger';
    if(registro.velocidad >= velocidadInf && registro.velocidad <= velocidadSup)
      return 'text-warning';  

  }

  ocultarFilas(registro:any, minima:number):boolean{
    return registro.velocidad > minima;
  }

  valorMinimo(valorMaximo:number):number{
    return valorMaximo * 0.85;
  }

  asignar(param:any):any{
    return this.registro = param;
  }

  constructor(private servicio:ObtenerArregloService) { 
  }

  ngOnInit() {
    this.getVehiculos();
  } 
}
