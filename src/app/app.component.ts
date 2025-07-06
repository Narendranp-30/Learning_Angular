import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,SignalsComponent,PipesComponent,FormComponent,DisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'AngularDemo';
  //This function returns the name "Narendra"
  myName(){
  return "Narendra"
}
//This is the url of the image
imageurl="https://picsum.photos/200/300";
//This is the alt text of the image
imagealt="Mylogo";
//This is a property binding example
demo = "Property Binding"

//safe:any=null;
//This is an object with properties
safe = {
  name:"safe navigation",
  working:"yes",
  time:"now"
}

//This is a counter variable
count=0;
//This function increments the counter variable
counter(){
  this.count++;
}
myNames:string[] =[];
onNameAdded(myName:string)
{
  console.log(myName,' from app');
  this.myNames.push(myName);
}


}

