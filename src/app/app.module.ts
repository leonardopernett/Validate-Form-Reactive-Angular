import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';

// firebase 
import {AngularFireModule} from '@angular/fire'
import { environment } from 'src/environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {DataDbService} from './services/data-db.service'

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [DataDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
