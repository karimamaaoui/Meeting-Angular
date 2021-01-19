import { Component,OnInit,DoCheck } from '@angular/core';
import { Meeting } from './list/meeting';
import { MeetingServService } from './meeting-serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck,OnInit{
  title = 'modele';
  meetings : Meeting[];
  action : string;

  constructor(private meetserv : MeetingServService){

  }
  

  // showAddMeeting(){
  //   this.meetserv.changeAction("add");
  // }

  
  // showEditMeeting(m : Meeting, indice : number){
  //   this.meetserv.changeAction("edit");
  //   this.meetserv.currentIndex = indice;
  //   this.meetserv.currentMeeting = m;
  // }

 

  ngDoCheck(){
    //this.meetings = this.meetserv.getMeetings();
   // this.action = this.meetserv.getAction();
  }

  ngOnInit(){
    //this.meetings = this.meetserv.getMeetings();
    ///console.log(this.meetserv);
    //this.action =  this.meetserv.getAction();
  }

}

