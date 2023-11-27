import { NgModule } from '@angular/core';

import { ButtonComponent } from 'src/lib/button/button.component';
import { IconComponent } from 'src/lib/icon/icon.component';
import { MiniLoaderComponent } from 'src/lib/mini-loader/mini-loader.component';

@NgModule({
    imports: [],
    declarations: [ButtonComponent, IconComponent, MiniLoaderComponent],
    exports: [ButtonComponent, IconComponent, MiniLoaderComponent],
})
export class ComponentModule {}
