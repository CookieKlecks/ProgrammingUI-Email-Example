import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  oldColor: string;

  constructor(private el: ElementRef) {
    this.oldColor = el.nativeElement.style.backgroundColor
  }

  @HostListener('focus') onFocus() {
    this.oldColor = this.el.nativeElement.style.backgroundColor
    this.highlight('#bfbfbf')
  }

  @HostListener('blur') onBlur() {
    this.highlight(this.oldColor)
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
