import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
// export class LightBoxDirective implements OnInit{
export class LightBoxDirective implements OnChanges{

  @Input('LightBox') highLightColor:string="yellow";
  @Input() defaultColor:string = "darkblue";

  constructor(private elemRef:ElementRef)
  {
    // this.elemRef.nativeElement.style.border=`2px solid ${this.defaultColor}`;
  }
  // ngOnInit(): void {
  //   this.elemRef.nativeElement.style.border=`2px solid ${this.defaultColor}`;
  // }
  ngOnChanges(): void {
    this.elemRef.nativeElement.style.border=`2px solid ${this.defaultColor}`;

  }

  @HostListener('mouseover') onMouseOver()
  {
    this.elemRef.nativeElement.style.border=`3px solid ${this.highLightColor}`;
  }

  @HostListener('mouseout') onMouseOut()
  {
    this.elemRef.nativeElement.style.border=`2px solid ${this.defaultColor}`;
  }

}
