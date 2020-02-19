import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirective]'
})
export class BetterHighlightDirectiveDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor
  }
}
