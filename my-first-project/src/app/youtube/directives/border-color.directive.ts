import { Directive, ElementRef, Input, OnChanges, Renderer2  } from '@angular/core';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements OnChanges {

  @Input('appBorderColor') date: string = '';


  constructor(private elementRef: ElementRef, private rendered2: Renderer2) {}

  public ngOnChanges(): void {
    const datePublish = new Date(this.date).getTime();
    const dateNow = Date.now();
    const days = this.timeDiffInDays(dateNow, datePublish);
    
    let color = '';
    if (days < 7) {
      color = 'blue';
    } else if ( days < 31) {
      color = 'green';
    } else if (days > 240) {
      color = 'red';
    }
    this.highlightBorder(color);

  }

  private highlightBorder(color: string) {
    this.rendered2.setStyle(this.elementRef.nativeElement, 'border-bottom-color', color);
  }

  private timeDiffInDays(dateNow:number, datePublish: number) {
    const timeDiff = dateNow - datePublish;
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return days;
  }

}
