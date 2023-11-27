import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Icons } from 'src/app/models/icons';
import { IconComponent } from '../icon/icon.component';
import { MiniLoaderComponent } from '../mini-loader/mini-loader.component';

export enum ButtonStyle {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TEXT = 'text',
    OUTLINED = 'outlined',
    DROPDOWN = 'dropdown',
}

export enum ButtonIcon {
    TRAILING = 'trailingIcon',
    LEADING = 'leadingIcon',
}

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export enum ButtonDisplay {
    FILL = 'fill',
    HUG = 'hug',
}
@Component({
    standalone: true,
    selector: 'wb-button-component',
    templateUrl: './button.component.html',
    imports: [IconComponent, MiniLoaderComponent],
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
    @Input() style: ButtonStyle = ButtonStyle.PRIMARY;
    @Input() size: ButtonSize = ButtonSize.SMALL;
    @Input() destructive = false;
    @Input() loading = false;
    @Input() trailingIcon?: Icons;
    @Input() leadingIcon?: Icons;
    @Input() disabled = false;
    @Input() display: ButtonDisplay = ButtonDisplay.HUG;
    @Output() btnClick = new EventEmitter();

    onClick() {
        this.btnClick.emit();
    }

    ngOnInit() {
        if (this.style === ButtonStyle.DROPDOWN) {
            this.trailingIcon = Icons.DROPDOWN;
        }
    }
}
