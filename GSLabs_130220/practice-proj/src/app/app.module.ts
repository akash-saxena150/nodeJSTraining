import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {FormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {ServerComponent} from './Server/Server.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { CoachesComponent } from './coaches/coaches.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { CoachPreviewComponent } from './coach-preview/coach-preview.component';
import { CoachDetailComponent } from './coach-detail/coach-detail.component';
import {BasicHighlight}  from './basic-highlight/basic-highlight-directive';
import { BetterHighlightDirectiveDirective } from './better-highlight/better-highlight-directive.directive' ;
import {ServerListService} from './serverlist-service';
import {CoachListService} from './coachlist-service';
import {LoggingService} from './logger-service';
import { DropdownDirective } from './dropdown-directive/dropdown.directive';
import { Routes, RouterModule } from '@angular/router';
const routes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'coaches', component: CoachesComponent, children:[
    {path: ':id', component: CoachDetailComponent}
  ]},
  {path: 'signin', component: SigninComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HomeComponent,
    CoachesComponent,
    SigninComponent,
    HeaderComponent,
    CoachPreviewComponent,
    CoachDetailComponent,
    BasicHighlight,
    BetterHighlightDirectiveDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServerListService, CoachListService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
