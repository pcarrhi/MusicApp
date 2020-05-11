import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/shared/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private afAuth: UserService) { }

  user = JSON.parse(localStorage.getItem('user'));

  ngOnInit(): void {
  }

}
