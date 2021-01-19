import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMeetComponent } from './add-meet/add-meet.component';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { EditMeetingComponent } from './edit-meeting/edit-meeting.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'add',
    component: AddMeetComponent
  },
 
  {
    path: 'edit/:idMeet',
    component: EditMeetingComponent
  },
  {
    path: 'details/:idMeet',
    component: DetailsComponent
  },
  
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
