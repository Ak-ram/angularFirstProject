import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[LightBox]',
})
export class LightBoxDirective {
  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.color = 'red';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.elemRef.nativeElement.classList.add('bg-danger');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elemRef.nativeElement.classList.remove('bg-dark');
  }
}
