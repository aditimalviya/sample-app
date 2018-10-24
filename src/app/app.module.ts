import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { HeaderComponent } from './header/header.component';
import { ManageTournamentComponent } from './manage-tournament/manage-tournament.component';
import { TournamentSetupComponent } from './manage-tournament/tournament-setup/tournament-setup.component';
import { ViewTournamentComponent } from './manage-tournament/view-tournament/view-tournament.component';
import { EditTournamentComponent } from './manage-tournament/edit-tournament/edit-tournament.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    HeaderComponent,
    ManageTournamentComponent,
    TournamentSetupComponent,
    ViewTournamentComponent,
    EditTournamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
