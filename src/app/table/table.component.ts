import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  vehiculos:Array<any> = [{nombre:"toyota",patente:"abc123",velocidad:"100", color: "rojo"},
  {nombre: "peugeot",patente:"abd123",velocidad:"85", color: "azul"},
  {nombre: "ford",patente:"bcd123",velocidad:"80", color: "verde"},
  {nombre: "ferrari",patente:"ccc222",velocidad:"100", color: "verde"}];

  categoriaLinea(registro:any,velocidadInf:number,velocidadSup:number):String{
    if(registro.velocidad >= velocidadSup)
      return 'text-danger';
    if(registro.velocidad >= velocidadInf && registro.velocidad <= velocidadSup)
      return 'text-warning';  

  }

  constructor() { }

  ngOnInit() {
  }

  
}
