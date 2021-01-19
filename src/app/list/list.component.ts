/*import { Component, OnInit } from '@angular/core';
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
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetingServService } from '../meeting-serv.service';
import { Meeting } from './meeting';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  meetings: Meeting[] = [];

  constructor(private meetingService: MeetingServService, private router: Router) { }

  ngOnInit(): void {
    this.meetings = this.meetingService.getMeetings();
  }

  showEditMeeting(meeting: Meeting): void {
    this.router.navigateByUrl('edit/' + meeting.idMeet);
  }

  showAddMeeting(): void {
    this.router.navigateByUrl('add');
  }

  deleteMeeting(indice : number){
    this.meetingService.deleteMeeting(indice);
    this.meetingService.saveMeeting();
  }
  
  showDetails(meeting:Meeting):void{
    alert("Id Meeting : "+meeting.idMeet+" \n le titre est "+meeting.titre+"\n Date Debut "+meeting.dateDeb+"\n Date Fin "+meeting.dateFin);
    //this.router.navigateByUrl('details/'+meeting.idMeet);
  }
}
