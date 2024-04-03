import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectGraphData} from "../graph/state/graph.selectors";
import {IDashboard} from "../../../dtos/dashboard";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  public graphListData ;
  public label: string[] = ['agreeableness', 'drive', 'luck', 'openess'];

  @Input() visible: boolean = false;
  @Input() text: string = '';
  @Input() title: string = '';
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private store: Store<IDashboard>) {
    this.graphListData = this.store.select(selectGraphData).pipe(
    )
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}


