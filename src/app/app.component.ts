import { Component } from '@angular/core';
import { MENU_DATA } from './data/menu';
import { AccordionMenuComponent } from './components/accordion-menu.component';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonContent, IonTitle, IonToolbar, IonHeader, IonApp, AccordionMenuComponent],
})
export class AppComponent {
  menus = MENU_DATA;

  constructor() { }
}
