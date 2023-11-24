import {Component, Input} from '@angular/core';

@Component({
  selector: 'mini-loader',
  templateUrl: './mini-loader.component.html',
  styleUrls: ['./mini-loader.component.scss']
})
export class MiniLoaderComponent {
  constructor() { }
  @Input() isVisible: boolean = true;
  @Input() hasLightTheme: boolean = false;
}
