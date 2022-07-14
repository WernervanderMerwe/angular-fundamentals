import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

/*
class ShoppingList2 {
  groceries: string[];
  constructor() {
    this.groceries = [];
  }
  addItem(item) {
    this.groceries = [this.groceries, item];
  }
  removeItem(item) {
    this.groceries = this.groceries.filter((grocery) => item !== grocery);
  }
}

const myNewList = new ShoppingList2();

myNewList.addItem('Banana');
myNewList.addItem('Apple');

console.log(myNewList);
///////////////////
// formatter.ts
function uppercase(str: string) {
  return str.toUpperCase();
}

// main.ts
import {uppercase} from './formatter'
let myName: string = 'Todd'

console.log(uppercase(myName))
*/
