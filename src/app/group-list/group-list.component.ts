import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { ToastrService } from 'ngx-toastr';
import { Group } from '../shared/group';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  Group: Group[];

  constructor(public crudApi: CrudService, private router: Router, public toastr: ToastrService) { }

  ngOnInit(): void {
    //this.dataState();
    let i = this.crudApi.getGroupList();
    i.snapshotChanges().subscribe(data => {
      this.Group = [];
      data.forEach(item => {
        let x = item.payload.toJSON();
        x['$key'] = item.key;
        this.Group.push(x as Group)
      })
    })
  }
  deleteGroup(group){
    if(window.confirm('Are you sure you want to delete this group?')){
      this.toastr.success(group.groupName + 'Group deleted');
      this.crudApi.detelteGroup(group.$key);
    }
  }


  gotoGroup(group){
    this.crudApi.getGroup(group.$key);
    this.router.navigate(['edit-group/', '$key']);
  }


}
