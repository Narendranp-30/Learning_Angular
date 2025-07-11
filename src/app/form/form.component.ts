import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
myName:string='';
// @Output() nameAdded = new EventEmitter<string>();

constructor(private bikeService:BikeService){

}
onSubmit(){
  console.log(this.myName);
  // t his.nameAdded.emit(this.myName);
  this.bikeService.addbikeName(this.myName)
  this.myName='';
}

}
