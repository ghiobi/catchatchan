import {Directive, Input, OnInit, ElementRef} from '@angular/core';
import {Subject} from "rxjs";

@Directive({
  selector: '[scrollDown]'
})
export class ScrollDownDirective implements OnInit{

  @Input('scrollDown') scrollDown: Subject<any>;

  constructor(
    private el: ElementRef
  ) { }


  ngOnInit (){
    this.scrollDown
      .subscribe((message) => {
      setTimeout(() => {
        this.scrollToBottom();
      }, 60);
    });
  }

  scrollToBottom(): void {
    try {
      this.el.nativeElement.scrollTop = this.el.nativeElement.scrollHeight;
    } catch(err) { }
  }

}
