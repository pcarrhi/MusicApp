import { Injectable } from '@angular/core';
import { Observable,of as observableOf, isObservable, BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase';
import { User } from 'firebase';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData: any;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  uid = this.afAuth.authState.pipe(
    map(authState => {
      if(!authState) {
        return null;
      }
      else {
        return authState.uid;
      }
    })
  );
  
  
  constructor(private afAuth: AngularFireAuth, public router: Router, public db: AngularFireDatabase) {
    
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }


  //methods to let member enter site or not
  login(email:string, password:string){
    this.afAuth.signInWithEmailAndPassword(email,password).then(
      value => {
        this.afAuth.authState.subscribe(user => {
          if(user) {
            this.userData = user;
            localStorage.setItem('user',JSON.stringify(this.userData));
            //JSON.stringify(localStorage.getItem('user'));
            this.currentUserSubject.next(user);
    
          }
          else {
            this.userData = user;
            localStorage.setItem('user', null);
            JSON.stringify(localStorage.getItem('user'));
          }
          this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
          this.currentUser = this.currentUserSubject.asObservable();
        });

        this.router.navigate(['/dashboard']);
      })
    .catch(err => {
      console.log("error", err.message);
    });
  }

  register(email:string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email,password).then(
      value => {
        this.router.navigate(['/dashboard']);
      }).catch(err => {
        console.log("error signing in", err.message);
    });
  }
  logout() {
    this.afAuth.signOut();
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.router.navigate(['/dashboard']);
  }
  // login(){
  //   this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  // }

}
