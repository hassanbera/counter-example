import { Component,ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

//ViewChild component ile ChildComponent'e erişim sağlar
@ViewChild(ChildComponent) child!: ChildComponent;

//Child bileşenin fonksiyonunu çağıran bir metot
updateChildMessage() {
  this.child.changeTitle("Hello from Parent Component");

}
}
