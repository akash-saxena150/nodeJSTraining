import { Directive, ElementRef, TemplateRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean){
    if(!condition)
    {
      this.vRef.createEmbeddedView(this.templateRef);
    }
    else{
      this.vRef.clear();
    }
  }
  constructor(private vRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }

}
