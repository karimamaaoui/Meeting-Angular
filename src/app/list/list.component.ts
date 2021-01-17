import { Component, OnInit } from '@angular/core';
import { meeting } from './meeting';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    Meetings= new Array<meeting>();

  constructor() { }

  ngOnInit(): void {

   this.Meetings=JSON.parse(localStorage.getItem('meetings'));
   console.log(this.Meetings)
   /*[
     // new meeting(1,"meet1","zoom",new Date(2,12,2020),new Date(3,11,2021)),
    //  new meeting(2,"meet2","skype",new Date(2,12,2020),new Date(3,11,2020)),
      
    ]*/

  }
  

}
