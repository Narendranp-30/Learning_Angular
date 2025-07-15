import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, ContentChildren, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecyclehooks',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './lifecyclehooks.component.html',
  styleUrl: './lifecyclehooks.component.css'
})
export class LifecyclehooksComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterViewInit,OnDestroy {
  message='';
  title1='Helo';
  pretitle='Helo';
  @Input() items:any=[];
  @Input() title='';
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['items']){
      console. log("OnChange Happens",changes['items']);
    }
    if(changes['title']){
      console.log("OnChange Happens in title",changes['title']);
    }
  }
  // ngOnInit(): void {
  //   this.message="Hello";
  // }

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

  @ViewChild('nameInput') nameInput!:ElementRef;
  ngAfterViewInit(): void {
    this.nameInput.nativeElement.focus();
    }
//to count automatically
    count:number=0;
    private intervalID:any;
    ngOnInit(): void {
      this.intervalID = setInterval(()=>{
        this.count++;
      },1000
      )
      console.log("Interval Id",this.intervalID); 
    }
    // destroy the count
    ngOnDestroy(): void {
      clearInterval(this.intervalID);
      console.log("Ondestroy happed");
    }

}
