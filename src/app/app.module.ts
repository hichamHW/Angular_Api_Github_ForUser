import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AllUserComponent } from './Components/all-user/all-user.component';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import {FormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { UrlShortComponent } from './Components/url-short/url-short.component';

const routes: Routes = [
  { path: '', component: AllUserComponent },
  { path: 'info/:id', component: UserInfoComponent },
  { path: 'url', component: UrlShortComponent },
  { path: 'url/:Key', component: UrlShortComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    UserInfoComponent,
    UrlShortComponent,

  ],
  imports: [
    BrowserModule,
  RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
