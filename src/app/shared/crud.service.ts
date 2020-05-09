import { Injectable } from '@angular/core';
import { Group } from './group';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  groupsRef: AngularFireList<any>;
  groupRef: AngularFireObject<any>; 

  constructor() { }
}
