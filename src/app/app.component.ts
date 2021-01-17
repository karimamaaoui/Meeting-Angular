import { Component } from '@angular/core';
import { meeting } from './list/meeting';
import { MeetingServService } from './meeting-serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modele';
  meetings : meeting[];
  action : string;

  constructor(private meetserv : MeetingServService){

  }
  

  showAddMeeting(){
    this.meetserv.changeAction("add");
  }

  
  showEditMeeting(m : meeting, indice : number){
    this.meetserv.changeAction("edit");
    this.meetserv.currentIndex = indice;
    this.meetserv.currentMeeting = m;
  }

  deleteMeeting(indice : number){
    this.meetserv.deleteMeeting(indice);
  }
 

  ngDoCheck(){
    this.meetings = this.meetserv.getMeetings();
    this.action = this.meetserv.getAction();
  }

  ngOnInit(){
    this.meetings = this.meetserv.getMeetings();
    ///console.log(this.meetserv);
    this.action =  this.meetserv.getAction();
  }

}

