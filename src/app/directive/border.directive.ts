import { Directive, OnInit, OnChanges } from '@angular/core';
import { ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnInit {
  @Input() color:string = 'blue';
  constructor(private elements: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {  
    console.log(this.color)
    this.renderer.setStyle(this.elements.nativeElement, 'background-color', `${this.color}`);
  }
  
  ngOnChanges(prevValue:string, currentValue:string ){
    this.renderer.setStyle(this.elements.nativeElement, 'background-color', `${currentValue}`);
  }
}
