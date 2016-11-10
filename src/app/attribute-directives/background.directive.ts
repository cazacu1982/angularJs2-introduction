import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[myBackground]'
})

export class BackgroundDirective {

    private _defaultColor = 'purple';
    constructor(private el: ElementRef, private renderer: Renderer) {}

    @Input('myBackground') backgroundColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.background(this.backgroundColor || this._defaultColor);
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.background(null);
    }
    private background(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}