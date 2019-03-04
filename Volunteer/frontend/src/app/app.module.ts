import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ RouterModule, Routes } from '@angular/router';
import { MyeventsComponent } from './components/myevents/myevents.component';
import { EventlistComponent } from './components/eventlist/eventlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MatToolbarModule,
  MatFormFieldModule, 
  MatInputModule, 
  MatOptionModule, 
  MatSelectModule, 
  MatIconModule, 
  MatButtonModule, 
  MatCardModule, 
  MatTableModule, 
  MatDividerModule, 
  MatSnackBarModule } from '@angular/material';
import { EventService} from './event.service';
import { HttpClientModule } from '@angular/common/http'; 


const routes: Routes = [
  { path: 'eventlist', component:EventlistComponent},
  {path: 'myevents', component:MyeventsComponent},
  {path: '', redirectTo: '/eventlist', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MyeventsComponent,
    EventlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [EventService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
