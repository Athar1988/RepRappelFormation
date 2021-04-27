import {Directive, HostBinding, HostListener} from '@angular/core';
import { angularMath } from 'angular-ts-math';
@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  ranbow:any;
  constructor() { }
  @HostBinding('style.color') bgc='black';
  @HostBinding('style.borderColor') bbgc='black';

  @HostListener('Keyup') onChangerContenue(): void{
    this.ranbow  = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.bgc= this.ranbow ;
  }
}
