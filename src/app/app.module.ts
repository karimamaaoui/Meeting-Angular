import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddMeetComponent } from './add-meet/add-meet.component';
import { DetailsComponent } from './details/details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditMeetingComponent } from './edit-meeting/edit-meeting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MeetingServService } from './meeting-serv.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddMeetComponent,
    DetailsComponent,
    EditMeetingComponent,

  ],

  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [
    MeetingServService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
