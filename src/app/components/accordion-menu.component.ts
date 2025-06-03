import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonList, IonItem, IonLabel, IonIcon } from "@ionic/angular/standalone";

@Component({
    selector: 'app-accordion-menu',
    templateUrl: './accordion-menu.component.html',
    styleUrls: ['./accordion-menu.component.scss'],
    imports: [CommonModule, IonIcon, IonLabel, IonItem, IonList],
})
export class AccordionMenuComponent {
    @Input() menus: any[] = [];
    activeIndices: Set<number> = new Set();
    selectedTitle: string | null = null;

    toggle(index: number) {
        if (this.activeIndices.has(index)) {
            this.activeIndices.delete(index);
        } else {
            this.activeIndices.add(index);
        }
    }

    isActive(index: number): boolean {
        return this.activeIndices.has(index);
    }

    select(title: string) {
        this.selectedTitle = title;
    }

    isSelected(title: string): boolean {
        return this.selectedTitle === title;
    }
}
