import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {

  //Grafico 1
  public label1: string[] = ['Grafico1', 'Grafico2', 'Grafico3']
  public data1 = [
    [10, 20, 60]
  ];

  //Grafico 2
  public label2: string[] = ['otro1', 'otro2', 'otro3']
  public data2 = [
    [15, 40, 55]
  ];

  //Grafico 3
  public label3: string[] = ['ultimo1', 'ultimo2', 'ultimo3']
  public data3 = [
    [23, 78, 98]
  ];
  
}
