import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

//  @Output() featureSelected=new EventEmitter<string>()

//   OnSelect(feature: string){
//   this.featureSelected.emit(feature);
//   }
  constructor() { }

  ngOnInit(): void {
  }

}
