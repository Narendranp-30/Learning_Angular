import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChildren, DoCheck, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecyclehooks',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './lifecyclehooks.component.html',
  styleUrl: './lifecyclehooks.component.css'
})
export class LifecyclehooksComponent implements OnChanges,OnInit,DoCheck,AfterContentInit {
  message='';
  title1='Helo';
  pretitle='Helo';
  @Input() items:any=[];
  @Input() title='';
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['items']){
      console.log("OnChange Happens",changes['items']);
    }
    if(changes['title']){
      console.log("OnChange Happens in title",changes['title']);
    }
  }
  ngOnInit(): void {
    this.message="Hello";
  }

  ngDoCheck(): void {
     if(this.title1!== this.pretitle){
      this.pretitle=this.title1;
      console.log("Title is changed" , this.title1);
     }
  }


  @ContentChildren('messageContent') messageElements!:QueryList<ElementRef>
  
  ngAfterContentInit(){
    this.messageElements.forEach(element =>{
      console.log('Projected content', element.nativeElement.textContent);
    })
  }
}
