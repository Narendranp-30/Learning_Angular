import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { HttpRequestResponseComponent } from './http-request-response/http-request-response.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,SignalsComponent,PipesComponent,FormComponent,DisplayComponent,LifecyclehooksComponent,HttpRequestResponseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'AngularDemo';
  itemList=[
    {id:1,name:"Angular"},
    {id:1,name:"Next"},
    {id:1,name:"React"},
    {id:1,name:"Node"},
    {id:1,name:"Backbone"},
    {id:1,name:"vue"},
  ]





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
// myNames:string[] =[];
// onNameAdded(myName:string)
// {
//   console.log(myName,' from app');
//   this.myNames.push(myName);
// }
showHi=true;

}

