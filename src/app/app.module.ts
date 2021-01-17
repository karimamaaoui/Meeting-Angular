import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddMeetComponent } from './add-meet/add-meet.component';
import { DetailsComponent } from './details/details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditMeetingComponent } from './edit-meeting/edit-meeting.component';
//import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddMeetComponent,
    DetailsComponent,
    EditMeetingComponent,

  ],

  imports: [
    BrowserModule,
    NgbModule,
    //MatDatepickerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
