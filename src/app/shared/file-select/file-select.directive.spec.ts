import { FileSelectDirective } from './file-select.directive';
import { Renderer2, ElementRef, Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { configureTestSuite } from 'src/test/test-base';
import { TestBed, ComponentFixture } from '@angular/core/testing';

@Component({
    selector: 'vc-test-file-select',
    template: `<div [scFileSelect]>`,
})
class TestFileSelectComponent {
   constructor(render:Renderer2, el: ElementRef, platform: Platform){}
}

describe('FileSelectDirective', () => {
    configureTestSuite();
    let fixture: ComponentFixture<TestFileSelectComponent>;
    beforeAll(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestFileSelectComponent,
                FileSelectDirective,
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(TestFileSelectComponent);
    });

  it('should create an instance', () => {
    const renderer = fixture.componentRef.injector.get(Renderer2);
    const ele = fixture.componentRef.injector.get(ElementRef);
    const platform = fixture.componentRef.injector.get(Platform);

    const directive = new FileSelectDirective(renderer, ele, platform);
    expect(directive).toBeTruthy();
  });
});