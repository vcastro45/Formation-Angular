import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../shared/item.model';
import { State } from '../../../shared/state.enum';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Output() changedState: EventEmitter<{item: Item, state: State}> = new EventEmitter();

  @Input() item: Item;
  stateHierarchy: State[] = [State.ALIVRER, State.ENCOURS, State.LIVREE];

  constructor() {}

  ngOnInit() {
  }

  get nextState (): State | undefined {
    return this.stateHierarchy[this.stateHierarchy.indexOf(this.item.state) + 1];
  }

  goToNextState (): void {
    this.changedState.emit({ item: this.item, state: this.nextState });
  }

}
