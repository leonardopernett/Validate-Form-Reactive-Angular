import { Component, OnInit } from '@angular/core';
import { DataDbService } from 'src/app/services/data-db.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  createFormReactive(){
    return new FormGroup({
      name:    new FormControl('',[Validators.required, Validators.minLength(5)]),
      email:   new FormControl('',[Validators.required]),
      message: new FormControl('',[Validators.required, Validators.minLength(10)]),
    })
  }

  contactForm:FormGroup;
  constructor(private dataService: DataDbService) {
    this.contactForm= this.createFormReactive();
   }
 
  ngOnInit(): void {
  }


  onResetForm(){
   this.contactForm.reset();
  }

  onSaveForm(){
    if(this.contactForm.valid){
      this.dataService.saveContact(this.contactForm.value)
       this.onResetForm();
       console.log('valid')
    }else{
      console.log('No Valid')
    }
  }
  //se declara los metodos para realizar la condicion 
  get name () { return this.contactForm.get('name')}
  get email() {return this.contactForm.get('email')}
  get message() {return this.contactForm.get('message')}

}
