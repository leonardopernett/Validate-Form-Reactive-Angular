import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'
import {Observable} from 'rxjs'
import { Contact } from '../model/contact.interface';
@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private contactCollection:AngularFirestoreCollection<Contact>

  constructor(public firestore :AngularFirestore) { 
     this.contactCollection = firestore.collection<Contact>('contacts')
  }
    
   saveContact(contact:Contact):void{
     this.contactCollection.add(contact);
   }
    
}
