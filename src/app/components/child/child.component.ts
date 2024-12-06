import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  //Bir değişken 
  childMessage: string="Hello from Child Component";

  changeTitle(newTitle: string) {
    this.childMessage = newTitle;
  }


}
