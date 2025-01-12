import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
  selector: '[appHighLightText]'
})
export class HighLightTextDirective implements OnInit{
  constructor(private element: ElementRef){}

  ngOnInit(): void {
    (this.element.nativeElement as HTMLElement).style.backgroundColor = "red" ;
  }

  @HostListener('click') click(){
    console.log("heyy bro")
  } 
}