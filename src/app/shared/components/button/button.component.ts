import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styles: [],
})
export class ButtonComponent {
  @Input()
  public styles: string = '';
  @Input()
  public text: string = '';
  @Input()
  public radius: string = 'rounded-full';
  @Input()
  public goTo: string = '';
}
