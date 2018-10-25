import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseout(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
