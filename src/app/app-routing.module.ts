import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { GroupListComponent } from './group-list/group-list.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'logout', component: LogoutComponent},
  
  { 
    path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard],
    children: [ 
      { path: 'add-group', component: AddGroupComponent },
      { path: 'group-list', component: GroupListComponent },
      { path: 'edit-group/:id', component: EditGroupComponent },
    ]
  }
  //{ path: 'checklists/:id', loadChildren: './checklist/checklist.module#ChecklistPageModule'},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
