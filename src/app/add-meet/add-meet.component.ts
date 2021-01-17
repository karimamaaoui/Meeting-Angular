import { Component, OnInit } from '@angular/core';
import { meeting } from '../list/meeting';
import { MeetingServService } from '../meeting-serv.service';


@Component({
  selector: 'app-add-meet',
  templateUrl: './add-meet.component.html',
  styleUrls: ['./add-meet.component.css']
})
export class AddMeetComponent implements OnInit {


  constructor(private meetserv : MeetingServService) { }
  
  addMeeting(idMeet :HTMLInputElement, titre : HTMLInputElement, lieu : HTMLInputElement, dateDeb:HTMLInputElement,dateFin:HTMLInputElement){
    var newMeeting = new meeting(idMeet.valueAsNumber,titre.value,lieu.value,dateDeb.valueAsDate,dateFin.valueAsDate);
    console.log(newMeeting);

    this.meetserv.addMeeting(newMeeting);
    idMeet.value="";
    titre.value = "";
    lieu.value = "";
    dateDeb.valueAsDate = new Date();
    dateFin.valueAsDate = new Date();
  }
  
  ngOnInit() {
    
    }

}
