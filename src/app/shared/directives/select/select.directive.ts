import { Directive, ElementRef, OnInit } from '@angular/core';

import { FormSelect } from 'materialize-css';

@Directive({
  selector: '[pachaSelect]'
})
export class SelectDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    FormSelect.init(this.elementRef.nativeElement);
  }
}
