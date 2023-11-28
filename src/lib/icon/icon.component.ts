import { Component, Input, OnInit } from '@angular/core';
import { Icons } from '../../app/models/icons';
import { ImagesService } from '../services/images.service';

@Component({
    selector: 'icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
    @Input() width = 20;
    @Input() height?: number;
    @Input({ required: true }) icon!: Icons;
    iconUrl = '';

    constructor(private imagesService: ImagesService) {}
    ngOnInit() {
        this.iconUrl = this.imagesService.getIcon(this.icon);
    }
}
