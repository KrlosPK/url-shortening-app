import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-anchord',
  templateUrl: './anchord.component.html',
  styles: [],
})
export class AnchordComponent {
  @Input()
  public styles: string = '';
  @Input()
  public text: string = '';
  @Input()
  public radius: string = 'rounded-full';
  @Input()
  public goTo: string = '';
}
