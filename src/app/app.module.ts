import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent
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
    MatListModule,
    AppRoutingModule

  ],
  providers: [ AngularFireDatabase, AuthGuard ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
