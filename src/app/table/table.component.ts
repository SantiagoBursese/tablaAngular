import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  registro:any;
  vehiculos:Array<any> = [{nombre:"toyota",patente:"abc123",velocidad:"120", fecha: "2019-05-03", color: "rojo"},
  {nombre: "peugeot",patente:"abd123",velocidad:"85",fecha: "2019-05-08",  color: "azul"},
  {nombre: "ford",patente:"bcd123",velocidad:"80",fecha: "2019-05-07",  color: "verde"},
  {nombre: "ferrari",patente:"ccc222",velocidad:"100",fecha: "2019-05-06",  color: "verde"},
  {nombre: "fiat",patente:"ddd222",velocidad:"90", fecha: "2019-05-05",  color: "amarillo"}];

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

  constructor() { }

  ngOnInit() {
  }

  
}
