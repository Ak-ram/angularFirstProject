import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[LightBox]',
})
export class LightBoxDirective {
  constructor(private elemRef: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.elemRef.nativeElement.classList.add('text-bg-primary');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elemRef.nativeElement.classList.remove('text-bg-primary');
  }
}
