import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';

  constructor( private el: ElementRef ) {
    this.setBorder('#f5f5f5');
  }

  @Input('pkmnBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder( this.borderColor || this.defaultColor );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setBorder( color: string ) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
