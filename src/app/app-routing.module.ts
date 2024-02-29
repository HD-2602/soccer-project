import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { MatchesComponent } from "./components/matches/matches.component";
import { PlayersComponent } from './components/players/players.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { WeatherComponent } from './components/weather/weather.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
// import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  // http://localhost:4200/path(""/signin/addMatch..)
  {path:"", component: HomeComponent},
  {path:"signin", component:LoginComponent},
  {path:"subscription", component:SignupComponent},
  {path:"signupAdmin", component:SignupComponent},
  {path:"addMatch", component:AddMatchComponent},
  {path:"addTeam", component:AddTeamComponent},
  {path:"matches", component:MatchesComponent},
  {path:"players", component:PlayersComponent},
  {path:"admin", component:AdminComponent},
  {path:"matchInfo", component:MatchInfoComponent},
  {path:"playerInfo", component: PlayerInfoComponent},
  {path:"teamInfo", component: TeamInfoComponent},
  {path:"editMatch/:x", component:EditMatchComponent},
  // {path:"editPlayer/:y", component:EditPlayerComponent},
  {path:"searchMatches", component: SearchMatchesComponent},
  {path:"weather", component: WeatherComponent},
  {path:"addPlayer", component: PlayerFormComponent},
  {path:"editPlayer/:id", component: PlayerFormComponent},
  {path:"profile", component: ProfileComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
