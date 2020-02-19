import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen:boolean = false;
  @HostListener('click') ddClicked(e: Event){
    this.isOpen = !this.isOpen;
  }
  constructor(private elRef: ElementRef) { }

}
