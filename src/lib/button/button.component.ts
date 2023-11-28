import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Icons } from '../../app/models/icons';

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
    selector: 'wb-button-component',
    templateUrl: './button.component.html',
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
