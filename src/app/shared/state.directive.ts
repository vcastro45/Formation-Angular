import { Directive, Input, HostBinding, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input()
  appState: string;

  @HostBinding('class')
  nomclass: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.nomclass = this.formatCssClass(this.appState);
  }

  private removeAccents (state: string): string {
    return state.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  private formatCssClass (state: string): string {
    return `state-${this.removeAccents(state).toLowerCase().replace(' ', '')}`;
  }
}
