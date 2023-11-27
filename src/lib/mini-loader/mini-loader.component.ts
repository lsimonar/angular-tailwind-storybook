import { Component, Input } from '@angular/core';

@Component({
    standalone: true,
    selector: 'mini-loader',
    templateUrl: './mini-loader.component.html',
    styleUrls: ['./mini-loader.component.scss'],
})
export class MiniLoaderComponent {
    @Input() isVisible = true;
    @Input() hasLightTheme = false;
}
