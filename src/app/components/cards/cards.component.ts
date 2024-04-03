import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {IDashboard} from "../../../dtos/dashboard";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  @Input() userName: string = '';
  @Input() imageSrc: string = '';
  @Output() getGraphInfo: EventEmitter<number | null> = new EventEmitter<number | null>();

  constructor(private store: Store<IDashboard>) {
  }

  onClick(): void {
    this.getGraphInfo.emit(); // Відправляємо подію, щоб батьківський компонент міг викликати getGraphInfo()
  }
}
