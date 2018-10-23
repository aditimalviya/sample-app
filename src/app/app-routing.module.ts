import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { HeaderComponent } from './header/header.component';
import { ManageTournamentComponent } from './manage-tournament/manage-tournament.component';
import { TournamentSetupComponent } from './manage-tournament/tournament-setup/tournament-setup.component';
import { ViewTournamentComponent } from './manage-tournament/view-tournament/view-tournament.component';
import { EditTournamentComponent } from './manage-tournament/edit-tournament/edit-tournament.component';


const appRoutes: Routes = [
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
