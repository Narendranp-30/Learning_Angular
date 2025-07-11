import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {
//  @Input()myName:string[] = [ ];
myName:string[] =[];

constructor (private bikeService:BikeService) {

}
ngOnInit(): void {
  this.bikeService.bikeName$.subscribe((names)=>{
    this.myName = names;
  })
}
}
