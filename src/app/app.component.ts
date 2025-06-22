import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'AngularDemo';
  myName(){
  return "Narendra"
}
imageurl="https://picsum.photos/200/300";
imagealt="Mylogo";
demo = "Property Binding"

//safe:any=null;
safe = {
  name:"safe navigation",
  working:"yes",
  time:"now"

}

count=0;
counter(){
  this.count++;
}


}

