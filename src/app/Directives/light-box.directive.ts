import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {

  constructor(private elemRef:ElementRef)
  {
    this.elemRef.nativeElement.style.border="2px solid red";
  }

  @HostListener('mouseover') onMouseOver()
  {
    this.elemRef.nativeElement.style.border="3px solid yellow";
  }

  @HostListener('mouseout') onMouseOut()
  {
    this.elemRef.nativeElement.style.border="2px solid red";
  }

}
