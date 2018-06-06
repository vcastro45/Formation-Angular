import { Injectable } from '@angular/core';
import { Item } from '../shared/item.model';
import { State } from '../shared/state.enum';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  collection: Item[];

  constructor() {
    this.collection = [
      {
        id: '1',
        name: 'Basic order',
        reference: '1337',
        state: State.ALIVRER
      },
      {
        id: '2',
        name: 'Awesome order',
        reference: '42',
        state: State.ENCOURS
      },
      {
        id: '3',
        name: 'Powerful order',
        reference: '777',
        state: State.LIVREE
      }
    ];
  }

  changeState (item: Item, newState: State) {
    const index = this.collection.indexOf(item);
    if (index >= 0) {
      this.collection[index].state = newState;
    }
  }
}
