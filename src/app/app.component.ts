import { Component } from '@angular/core';
import { UserService } from '../app/shared/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'MusicMeetup';

  constructor(
    public user: UserService) {}
}
