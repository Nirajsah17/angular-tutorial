import { Directive, Input, OnInit, TemplateRef, ViewContainerRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appNgIf]'
})
export class NgIfDirective implements OnChanges{

  @Input() appNgIf: boolean = false;
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.appNgIf){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear()
    }
  }
}
