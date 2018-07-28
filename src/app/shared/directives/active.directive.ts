import { Directive, Renderer2, Input, AfterViewInit, OnChanges, HostListener, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';


@Directive({
  selector: '[appActive]'
})
export class ActiveDirective implements AfterViewInit, OnChanges {

  @Input() user: any;

  @Input() activeProp: string;

  @Output() dataEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private renderer: Renderer2, private elm: ElementRef,private ref:ChangeDetectorRef) {

  };

  ngAfterViewInit(): void {

      const propsList: string[] = Object.keys(this.user);
      
      propsList.find(prop => {
        if (this.activeProp === 'name') {
          const data: string = this.elm.nativeElement['attributes']['data-title'].value;
          this.dataEmitter.emit(data);
          return true;
        }
      });
    this.ref.detectChanges();

  };

  ngOnChanges(): void { };

  @HostListener('mouseenter', ['$event']) mouseenter(event: Event) {

    const propsList: string[] = Object.keys(this.user)

    propsList.filter(prop => {

      this.user[prop].isActive = false;
      this.renderer.removeClass(this.elm.nativeElement, 'active');

      if (prop === this.activeProp) {
        this.user[prop].isActive = true;
        this.renderer.addClass(this.elm.nativeElement, 'active');
        const data: string = this.elm.nativeElement['attributes']['data-title'].value;
        this.dataEmitter.emit(data);
      }

    });

  };



}
