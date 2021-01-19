/*import { Injectable } from '@angular/core';
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

 
}*/
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meeting } from './list/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingServService {
  currentMeeting : Meeting;

  meetings: Meeting[] = [
    { "idMeet": 1, "titre": "meet1", "lieu": "skype", dateDeb: '02/01/2020', dateFin: '03/01/2020' },
    { "idMeet": 2, "titre": "meet2", "lieu": "skype", dateDeb: '03/02/2021', dateFin:'04/02/2021'},
    { "idMeet": 3, "titre": "meet3 ", "lieu": "teams", dateDeb:'23/04/2020', dateFin:'20/12/2021' },
   ];
  constructor() { }

  getMeetings() {
    return this.meetings;
  }

  
  getMeetingById(id: number) {
    return this.meetings.filter((m: Meeting) => m.idMeet === id)[0];
  }

  addMeeting(m: Meeting) {
    this.meetings.push(m);
  }

  editMeeting(meeting: Meeting) {
    const index = this.meetings.findIndex((m: Meeting) => m.idMeet === meeting.idMeet);
    this.meetings[index] = meeting;
  }

  deleteMeeting(indice: number) {
    console.log(indice);
    if (confirm("Etes-vous sûre de vouloir supprimer ce Meeting " + this.meetings[indice].idMeet)) {
      this.meetings.splice(indice, 1);
      this.saveMeeting();
    }
  }

  getCurrentMeeting(i : number){
    return this.meetings[i];
  }
  saveMeeting(){
    window.localStorage.setItem("meetings", JSON.stringify(this.meetings));
  }
 
  
}

