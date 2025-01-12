import { Directive, HostBinding, HostListener, Input, OnChanges } from '@angular/core';


@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input() onEnter:string ='red'
  @Input() onLeave:string ='gray'

  constructor() { }

  @HostBinding("style.backgroundColor") color:string = "gray"

  @HostListener("mouseenter") mouseenter(){
    this.color = this.onEnter
  }

  @HostListener("mouseleave") mouseleave(){
    this.color = this.onLeave
  }

  ngChanges(pre:any, cur:any){  
    console.log({pre, cur});
  }

}
