import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean){
    if(!condition){
      console.log(this.templateRef);
      this.vRef.createEmbeddedView(this.templateRef)
    }
    else{
      this.vRef.clear();
    }
  }
  constructor(private vRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }

}
