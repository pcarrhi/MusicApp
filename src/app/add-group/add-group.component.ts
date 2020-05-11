import { Component, OnInit } from '@angular/core';

import { CrudService } from '../shared/crud.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  public groupForm: FormGroup;

  constructor(
    public toastr: ToastrService, 
    public fb: FormBuilder,
    public crudApi: CrudService,
    public router: Router,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.crudApi.getGroupList();
    this.groupFormAction();
  }

  groupFormAction(){
    this.groupForm = this.fb.group({
      groupName: ['', [Validators.required, Validators.minLength(6)]],
      groupMembers: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      groupLocation: ['', [Validators.required]],
      groupInstrument: ['', [Validators.required]]
    })
  }

  get groupName() {
    return this.groupForm.get('groupName');
  }

  get groupMembers() {
    return this.groupForm.get('groupMembers');
  }

  get groupLocation() {
    return this.groupForm.get('groupMembers');
  }

  get groupInstrument() {
    return this.groupForm.get('groupInstrument');
  }

  resetForm() {
    this.groupForm.reset();
  }

  onSubmit() {
    this.crudApi.addGroup(this.groupForm.value);
    this.toastr.success(this.groupForm.controls['groupName'].value + " created. Youre ready to jam!"); 
  }

}
