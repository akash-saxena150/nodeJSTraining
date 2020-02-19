import { Directive, HostBinding, OnInit, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
  @HostBinding('class.open') isOpen = false;
  // @HostListener('click') toggleDD(e: Event){
  //   this.isOpen = !this.isOpen;
  // }
  @HostListener('document:click', ['$event']) toggleOpen(e: Event){
    if(this.elRef.nativeElement.contains(e.target))
      this.isOpen = true;
    else
      if(this.elRef.nativeElement === e.target)
        this.isOpen = !this.isOpen
      else
        this.isOpen = false

  }
  constructor(private elRef: ElementRef) {
   }
  ngOnInit(){

  }

}
