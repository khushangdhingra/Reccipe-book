import { Directive,HostListener,HostBinding } from "@angular/core";

@Directive({
  selector:'[appDropDown]',
  exportAs:"appDropDown"
})
export class dropdowndirective
{
    @HostBinding('class.open')isopen=false;
    @HostListener('click') toggleopen() {
      this.isopen=!this.isopen;
    }

}
