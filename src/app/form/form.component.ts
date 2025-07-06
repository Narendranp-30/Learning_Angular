import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
myName:string='';
@Output() nameAdded = new EventEmitter<string>();
onSubmit(){
  console.log(this.myName);
  this.nameAdded.emit(this.myName);
  this.myName='';
}

}
