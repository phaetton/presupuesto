import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

export interface PeriodicElement {
  name: string;
  date?: string;
  cant: number;
  nota?: string;
}

const INGRESOS: PeriodicElement[] = [
  { name: 'ayuntamiento', date: '2024/05/20', cant: 1200, nota: 'ayuda reintegro cuatro meses' },
  { name: 'yaritza', date: '2024/06/02', cant: 6, nota: 'pago netflix' },
  { name: 'pago', date: '2024/06/01', cant: 850 },
];

const PAGADOS: PeriodicElement[] = [
  { name: 'piso', date: '2024/06/01', cant: 450, nota: 'pago de piso junio' },
];

const PORPAGAR: PeriodicElement[] = [
  { name: 'agua', cant: 30, nota: 'pago de agua junio' },
  { name: 'luz', cant: 90, nota: 'pago de luz junio' },
  { name: 'basura', cant: 30, nota: 'pago de luz junio' },
];

const MEDEBEN: PeriodicElement[] = [
  { name: 'alvaro', cant: 6, nota: 'pago de netflix' },
  { name: 'piso', cant: 250, nota: 'pago todo de mi bolsa' },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule,MatTableModule],


  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tingresos:number=0;
tpagados:number=0;
tporpagar:number=0;
tmedeben:number=0;


  displayedColumnsingresos: string[] = ['date', 'name', 'cant'];
  displayedColumnspagados: string[] = ['date', 'name', 'cant'];
  displayedColumnsporpagar: string[] = [ 'name', 'cant'];
  displayedColumnsmedeben: string[] = [ 'name', 'cant'];

  dataSourceingresos = [...INGRESOS];
  dataSourcepagados = [...PAGADOS];
  dataSourceporpagar = [...PORPAGAR];
  dataSourcemedeben = [...MEDEBEN];
  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;


  getTotalIngresos() {
    return this.dataSourceingresos.map(t => t.cant).reduce((acc, value) => acc + value, 0);
  }

  getTotalPagados() {
    return this.dataSourcepagados.map(t => t.cant).reduce((acc, value) => acc + value, 0);
  }

  getTotalPorPagar() {
    return this.dataSourceporpagar.map(t => t.cant).reduce((acc, value) => acc + value, 0);
  }

  getTotalMeDeben() {
    return this.dataSourcemedeben.map(t => t.cant).reduce((acc, value) => acc + value, 0);
  }
}
