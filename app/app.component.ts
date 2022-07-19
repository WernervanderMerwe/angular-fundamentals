import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <!-- <passenger-viewer></passenger-viewer> without router -->
      <nav class="nav">
        <a
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }">
          Home
        </a>
        <a
          routerLink="/oops"
          routerLinkActive="active">
          404
        </a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
