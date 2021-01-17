import { Component, OnInit } from '@angular/core';
import { meeting } from '../list/meeting';
import { MeetingServService } from '../meeting-serv.service';

@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.css']
})
export class EditMeetingComponent implements OnInit {
  Meeting : meeting;

  constructor(private meetservice : MeetingServService) { }

  editMeeting(idMeet : HTMLInputElement, titre : HTMLInputElement, lieu : HTMLInputElement,dateDeb:HTMLInputElement,dateFin:HTMLInputElement){
    let updatedMeeting = new meeting(idMeet.valueAsNumber,titre.value,lieu.value,dateDeb.valueAsDate,dateFin.valueAsDate);
    this.meetservice.editMeeting(updatedMeeting);
    idMeet.value="";
    titre.value="";
    lieu.value="";
    dateDeb.valueAsDate=new Date();
    dateFin.valueAsDate=new Date();
   
  }

  ngDoCheck(){
    this.Meeting = this.meetservice.getCurrentMeeting();
  }

  ngOnInit() {
    this.Meeting = this.meetservice.getCurrentMeeting();
  }


}
