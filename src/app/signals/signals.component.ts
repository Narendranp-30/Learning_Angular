import { CommonModule, NgFor } from '@angular/common';
import { Component, Signal, signal,computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
 count=signal(0);

 doubleCount:Signal<number> =computed(()=>  this.count() * 3) ;

 counter(){
  this.count.set(this.count()+1 )
 }

 add=signal("A");

 add2:Signal<string>=computed(()=> this.add()+1);

 adding(){
  this.add.set(this.add()+3);
 }

 car=["audi","bmw","benz","ford","maruti"];

 bikes=["TVS","RE","HONDA","YAMAHA"];

 hide=false;


}
