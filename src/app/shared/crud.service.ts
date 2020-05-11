import { Injectable } from '@angular/core';
import { Group } from './group';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  groupsRef: AngularFireList<any>;
  groupRef: AngularFireObject<any>; 

  constructor(private db: AngularFireDatabase, private router: Router) { }

  //Creating group
  addGroup(group: Group) {
    this.groupsRef.push({
      groupName: group.groupName,
      groupLocation: group.groupLocation,
      groupMembers: group.groupMembers,
      groupInstrument: group.groupInstrument
    })
    this.router.navigate(['../group-list']);
  }

  getGroup(id: string) {
    this.groupRef = this.db.object('groups-list/' + id);
    return this.groupRef;
  }

  getGroupList() {
    this.groupsRef = this.db.list('groups-list');
    return this.groupsRef;
  }

  updateGroup(group: Group){
    this.groupRef.update({
      groupName: group.groupName,
      groupLocation: group.groupLocation,
      groupMembers: group.groupMembers,  
      groupInstrument: group.groupInstrument
    })
  }

  detelteGroup(id: string){
    this.groupRef = this.db.object('groups-list/' + id);
    this.groupRef.remove();
  }

}
