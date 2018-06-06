import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../../core/items.service';
import { Item } from '../../../shared/item.model';
import { State } from '../../../shared/state.enum';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  constructor(public itemsService: ItemsService) { }

  ngOnInit() {
  }

  changeState (changedState: {item: Item, state: State}): void {
    this.itemsService.changeState(changedState.item, changedState.state);
  }

}
