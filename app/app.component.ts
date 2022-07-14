import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{ title }}
      <div>
        <h1 [innerHTML]="title"></h1>
      </div>

    </div>
  `
})

export class AppComponent {
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  constructor() {
    this.title = 'Ultimate Angular'
  }
}
