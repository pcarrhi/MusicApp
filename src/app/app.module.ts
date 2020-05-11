import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component';

//Making it look pwetty :)
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { AddGroupComponent } from './add-group/add-group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { GroupListComponent } from './group-list/group-list.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AddGroupComponent,
    EditGroupComponent,
    GroupListComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBqQDNbb7iiX5QJ3CKObPdeXBe4UZHHrwQ",
        authDomain: "music-meetup-app.firebaseapp.com",
        databaseURL: "https://music-meetup-app.firebaseio.com",
        projectId: "music-meetup-app",
        storageBucket: "music-meetup-app.appspot.com",
        messagingSenderId: "927409928156",
        appId: "1:927409928156:web:98811f8435e9b242c08119"

      }

    ),
    AngularFireAuthModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [ AngularFireDatabase, AuthGuard ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
