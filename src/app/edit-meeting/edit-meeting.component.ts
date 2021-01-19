import { Component,OnInit, Input, Output, EventEmitter ,DoCheck } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Meeting } from '../list/meeting';
import { MeetingServService } from '../meeting-serv.service';

@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.css']
})
export class EditMeetingComponent implements OnInit {

  public meeting: Meeting;
  public meetID: number;
  public meetingForm: FormGroup;

  constructor(
    private router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly activeRoute: ActivatedRoute,
    private readonly meetingService : MeetingServService,
  ) { }
  

  ngOnInit(): void {
    this.prepareForm();
  }

  onEditMeeting(): void {
    const {idMeet, titre, lieu, dateDeb, dateFin} = this.meetingForm.value;
    this.meetingService.editMeeting(this.meetingForm.value);
    this.router.navigate(['list']);
    this.meetingService.saveMeeting();
    // console.log(idMeet, titre, lieu, dateDeb, dateFin);
  }
  

  private patchForm(id: number): void {
    const meet = this.meetingService.getMeetingById(id);
    this.meetingForm = this.formBuilder.group(
      {
        idMeet: new FormControl(meet.idMeet, Validators.compose([Validators.required])),
        titre: new FormControl(meet.titre, Validators.compose([Validators.required])),
        lieu: new FormControl(meet.lieu, Validators.compose([Validators.required])),
        dateDeb: new FormControl(new Date(meet.dateDeb).toISOString().substring(0, 10), Validators.compose([Validators.required])),
        dateFin: new FormControl(new Date(meet.dateFin).toISOString().substring(0, 10), Validators.compose([Validators.required]))
      }
    );
  }

  private prepareForm(): void {
    this.activeRoute.params.subscribe(params => {
      this.meetID = +params['idMeet']; // (+) converts string 'id' to a number
      this.patchForm(this.meetID);
   });
  }

  
  
}
