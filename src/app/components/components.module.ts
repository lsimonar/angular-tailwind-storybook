import { NgModule } from '@angular/core';

// Atoms
import { ButtonComponent } from '@atoms/button/button.component';
import { LinkComponent } from '@atoms/link/link.component';

// Molecules
import { ButtonGroupComponent } from '@molecules/button-group/button-group.component';

// Organisms
import { ButtonSectionComponent } from '@organisms/button-section/button-section.component';
import { FooterComponent } from '@organisms/footer/footer.component';
import { HeroComponent } from '@organisms/hero/hero.component';

@NgModule({
    imports: [],
    declarations: [
        ButtonComponent,
        ButtonGroupComponent,
        ButtonSectionComponent,
        FooterComponent,
        LinkComponent,
        HeroComponent,
    ],
    exports: [ButtonComponent, ButtonGroupComponent, ButtonSectionComponent, FooterComponent, HeroComponent],
})
export class ComponentModule {}
