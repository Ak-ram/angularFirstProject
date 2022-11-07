import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]',
})
export class LightBoxDirective {
  @Input() highlightColor: string = 'text-bg-light';
  constructor(private elemRef: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.elemRef.nativeElement.classList.add(this.highlightColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elemRef.nativeElement.classList.remove(this.highlightColor);
  }
}
