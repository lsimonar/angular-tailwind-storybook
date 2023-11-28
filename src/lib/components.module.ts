import { NgModule } from '@angular/core';

import { ButtonComponent } from '../lib/button/button.component';
import { IconComponent } from '../lib/icon/icon.component';
import { MiniLoaderComponent } from '../lib/mini-loader/mini-loader.component';
import { ImagesService } from './services/images.service';

@NgModule({
    imports: [],
    declarations: [ButtonComponent, IconComponent, MiniLoaderComponent],
    exports: [ButtonComponent, IconComponent, MiniLoaderComponent],
    providers: [ImagesService],
})
export class ComponentModule {}
