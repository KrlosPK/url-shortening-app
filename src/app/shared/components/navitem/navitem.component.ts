import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-navitem',
  templateUrl: './navitem.component.html',
  styles: [],
})
export class NavitemComponent {
  @Input()
  public text: string = '';
  @Input()
  public link: string = '/';
  @Input()
  public textColor: string = 'text-white';
  @Input()
  public textColorHover: string = 'text-white';
}
