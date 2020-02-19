import { Directive, OnInit, Renderer2, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string;
  @Input() hoverColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string="transparent";
  // constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  constructor() { }
  ngOnInit():void{
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor||'transparent');
    //this.renderer.setProperty(this.elRef.nativeElement, 'innerHTML',);
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.hoverColor||'blue');
    this.backgroundColor = this.hoverColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor||'transparent');
    this.backgroundColor = this.defaultColor
  }
}
