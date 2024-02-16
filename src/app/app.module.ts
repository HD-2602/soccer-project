import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ResultComponent } from './components/result/result.component';
import { StatsComponent } from './components/stats/stats.component';
import { NewsComponent } from './components/news/news.component';
import { BlogComponent } from './components/blog/blog.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { PlayerComponent } from './components/player/player.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import {HttpClientModule} from "@angular/common/http";
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { WeatherComponent } from './components/weather/weather.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ResultComponent,
    StatsComponent,
    NewsComponent,
    BlogComponent,
    CupEventComponent,
    InfoComponent,
    ArticleComponent,
    HomeComponent,
    AddMatchComponent,
    AddTeamComponent,
    SignupComponent,
    MatchesComponent,
    PlayersComponent,
    AdminComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    PlayerComponent,
    EditMatchComponent,
    MatchInfoComponent,
    AsterixPipe,
    SearchMatchesComponent,
    WeatherComponent,
    PlayerInfoComponent,
    TeamInfoComponent,
    EditPlayerComponent,
    MyFilterPipe,
    PlayerFormComponent,
    ProfileComponent
  ],
  imports: [
    // exécution automatique, package hadhrin (comme les options(-o))...
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
