import { Directive, OnInit, Input, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appHomeDirective]',
  standalone:true

})
export class HomeDirectiveDirective implements OnInit   {
  @Input() color: string = '';
  @Input() fontSize: string = '';
  originalColor: string = '';


  constructor(private _element:ElementRef) { 
   
  }
 
  ngOnInit() {
    console.log(this._element);
    this._element.nativeElement.style.color = this.color;
    this._element.nativeElement.style.fontSize = this.fontSize;
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    this._element.nativeElement.style.color = this.color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._element.nativeElement.style.color = this.originalColor;
  }
}
  

