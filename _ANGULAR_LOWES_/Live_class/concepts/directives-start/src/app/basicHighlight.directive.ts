import {OnInit, Directive, ElementRef} from '@angular/core'

@Directive({
    selector:'[basicHighlight]'
})
export class BasicHighlight implements OnInit{
    constructor(private elementRef: ElementRef){}
    ngOnInit(){
        console.log("element", this.elementRef);
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}