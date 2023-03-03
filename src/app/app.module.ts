import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import {AngularFontAwesomeModule} from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/security/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/security/register/register.component';
import { EditProfileComponent } from './components/actor/displayProfile/editProfile.component';
import { AppRoutingModule } from './app-routing.module';
import { ActorService } from './services/actor.service';

export const firebaseConfig = {
  apiKey: "AIzaSyDTKZyAUIeYxfi6ybf-wn4Ku19NjzX7tOg",
  authDomain: "acme-explorer-e1e36.firebaseapp.com",
  databaseURL: "https://acme-explorer-e1e36-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "acme-explorer-e1e36",
  storageBucket: "acme-explorer-e1e36.appspot.com",
  messagingSenderId: "585079603252",
  appId: "1:585079603252:web:7ec6bf56ba03ad7aae0a61",
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule
  ],
  providers: [AngularFireAuth, ActorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
