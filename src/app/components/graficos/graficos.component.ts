import { Component } from '@angular/core';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent {

  results: any[] = [
    {
      name: 'Juego1',
      value: 20
    },
    {
      name: 'Juego2',
      value: 25
    },
    {
      name: 'Juego3',
      value: 30
    },
    {
      name: 'Juego4',
      value: 35
    },
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  constructor() {
    const newResults = [...this.results];
    console.log(newResults)
    console.log('mi logica')
  }

  onSelect(event) {
    console.log(event);
  }

}
