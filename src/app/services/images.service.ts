import { Injectable } from '@angular/core';
import { Icons } from '../models/icons';

type TIcons = Record<Icons, string>;

@Injectable({
    providedIn: 'root',
})
export class ImagesService {
    private icons: TIcons = {
        [Icons.ARROW_RIGHT]: 'assets/icons/arrow_right.svg',
        [Icons.ARROW_LEFT]: 'assets/icons/arrow_left.svg',
        [Icons.BED]: 'assets/icons/bed.svg',
        [Icons.BREAKFAST]: 'assets/icons/breakfast.svg',
        [Icons.BUNK]: 'assets/icons/bunk.svg',
        [Icons.CERTIFICATE]: 'assets/icons/certificate.svg',
        [Icons.CLOCK]: 'assets/icons/clock.svg',
        [Icons.CROSS]: 'assets/icons/cross.svg',
        [Icons.FLASH]: 'assets/icons/flash.svg',
        [Icons.INFO]: 'assets/icons/info.svg',
        [Icons.LOCK]: 'assets/icons/lock.svg',
        [Icons.MINUS]: 'assets/icons/minus.svg',
        [Icons.MORE]: 'assets/icons/more.svg',
        [Icons.PLACEHOLDER]: 'assets/icons/placeholder.svg',
        [Icons.PLUS]: 'assets/icons/plus.svg',
        [Icons.REFUND]: 'assets/icons/refund.svg',
        [Icons.SWAP]: 'assets/icons/swap.svg',
        [Icons.AVATAR]: 'assets/icons/avatar.svg',
        [Icons.TICK]: 'assets/icons/tick.svg',
        [Icons.ALERT]: 'assets/icons/alert.svg',
        [Icons.HELP]: 'assets/icons/help.svg',
        [Icons.CALENDAR]: 'assets/icons/calendar.svg',
        [Icons.STAR]: 'assets/icons/star.svg',
        [Icons.COPY]: 'assets/icons/copy.svg',
        [Icons.DROPDOWN]: 'assets/icons/dropdown.svg',
        [Icons.PLANE]: 'assets/icons/plane.svg',
        [Icons.USER]: 'assets/icons/user.svg',
        [Icons.USER_SOLID]: 'assets/icons/user_solid.svg',
        [Icons.DROPDOWNSOLID]: 'assets/icons/dropdown-solid.svg',
        [Icons.LOCATION]: 'assets/icons/location.svg',
        [Icons.OPEN]: 'assets/icons/open.svg',
        [Icons.WARNING]: 'assets/icons/warning.svg',
        [Icons.FILTER]: 'assets/icons/filter.svg',
        [Icons.EMAIL]: 'assets/icons/email.svg',
    };

    getIcon(icon: Icons) {
        return this.icons[icon];
    }
    getIcons() {
        return this.icons;
    }
}
