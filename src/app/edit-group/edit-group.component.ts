import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router'; 
import { Location } from '@angular/common';

import { ToastrService } from 'ngx-toastr';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {

  editForm: FormGroup;

  constructor(
    private toastr: ToastrService,
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private activeRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
   
    //Get current component's id or information using ActivatedRoute service
    const id = this.activeRoute.snapshot.paramMap.get('id'); // Activated route to get the current component's inforamation
    this.crudApi.getGroup(id).valueChanges().subscribe(data => {
      this.editForm.setValue(data);
    }) 
    
    this.updateGroupData();
  }

  get groupName() {
    return this.editForm.get('groupName');
  }

  get groupLocation() {
    return this.editForm.get('groupLocation');
  }

  get groupInstrument() {
    return this.editForm.get('groupInstrument');
  }

  get groupMembers() {
    return this.editForm.get('groupMembers');
  }

  updateGroupData(){
    this.editForm = this.fb.group({
      groupName: ['', [Validators.required, Validators.minLength(6)]],
      groupLocation: ['', [Validators.required]],
      groupMembers: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      groupInstrument: ['', [Validators.required]]
    })
  }

  updateForm() {
    this.crudApi.updateGroup(this.editForm.value);
    this.location.back(); //goes back to previous component
    this.toastr.success(this.editForm.controls['groupName'].value + ' successfully updated!');
  }
}
