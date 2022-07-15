import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   loadedfeature='recipe';
  OnNavigate(feature: string){
  this.loadedfeature=feature;
  }


   title = 'shopping-app';
}
