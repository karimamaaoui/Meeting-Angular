import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { meeting } from './list/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingServService {

  meetings : meeting[];
  action : string;
  currentIndex : number;
  currentMeeting : meeting;
  form : NgForm;
  constructor() { }


  changeAction(action : string) : void{
    this.action = action;
  }

  getAction(){
    return this.action;
  }

  saveMeetings(){
    window.localStorage.setItem("meetings", JSON.stringify(this.meetings));
  }
  
  getMeetings(){
    if(window.localStorage.getItem("meetings")){
      this.meetings = JSON.parse(window.localStorage.getItem("meetings"));
    }
    else{
      this.meetings = [];
    }

    return this.meetings;
    
  }

  getCurrentMeeting(){
    return this.currentMeeting;
  }


  addMeeting(m : meeting){
    this.meetings.push(m);
    this.saveMeetings();
    this.changeAction(""); 
  }

  editMeeting(m:meeting){
    this.meetings[this.currentIndex] = m;
    this.saveMeetings();
    this.changeAction("");
  }

  deleteMeeting(indice : number){
    if(confirm("Etes-vous sûre de vouloir supprimer l'étudiant " + this.meetings[indice].idMeet)){
      this.meetings.splice(indice, 1);
      this.saveMeetings();
    }
  }

 
}
