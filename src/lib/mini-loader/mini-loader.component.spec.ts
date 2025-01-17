import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniLoaderComponent } from './mini-loader.component';

describe('MiniLoaderComponent', () => {
    let component: MiniLoaderComponent;
    let fixture: ComponentFixture<MiniLoaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MiniLoaderComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MiniLoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
