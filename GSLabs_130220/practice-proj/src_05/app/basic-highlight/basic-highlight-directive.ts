import { OnInit, Directive, ElementRef } from "@angular/core";
@Directive({
    selector:"[basicHighlight]"
})
export default class BasicHighlightDirective implements OnInit{
constructor(private element: ElementRef){}
ngOnInit(): void{
   this.element.nativeElement.style.backgroundColor = "green";
   this.element.nativeElement.textContent = `+${this.element.nativeElement.textContent}+`;
   this.element.nativeElement.style.color = "white";
}
}