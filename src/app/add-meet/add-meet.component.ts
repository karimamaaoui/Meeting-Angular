import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Meeting } from '../list/meeting';
import { MeetingServService } from '../meeting-serv.service';


@Component({
  selector: 'app-add-meet',
  templateUrl: './add-meet.component.html',
  styleUrls: ['./add-meet.component.css']
})
export class AddMeetComponent implements OnInit {
  public meetingForm: FormGroup;


  constructor(
    private router: Router,
    private readonly formBuilder: FormBuilder,
    private meetingService: MeetingServService,
  ) { }

  onAddMeeting() {

    this.meetingService.addMeeting(this.meetingForm.value);
    this.router.navigate(['list']);
    this.meetingService.saveMeeting();
  }


  ngOnInit() {
    this.meetingForm = this.formBuilder.group(
      {
        idMeet: new FormControl('', Validators.compose([Validators.required])),
        titre: new FormControl('', Validators.compose([Validators.required])),
        lieu: new FormControl('', Validators.compose([Validators.required])),
        dateDeb: new FormControl(new Date().toISOString().substring(0, 10), Validators.compose([Validators.required])),
        dateFin: new FormControl(new Date().toISOString().substring(0, 10), Validators.compose([Validators.required]))
      }
    );

  }


}
