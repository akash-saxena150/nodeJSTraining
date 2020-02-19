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
import BasicHighlightDirective from './basic-highlight/basic-highlight-directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './better-highlight/unless.directive';
import {LoggingService} from './logging-service';
import { DropdownDirective } from './dropdown/dropdown.directive'
import { CoachListService } from './coach-list.service';
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
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [
    LoggingService,
    CoachListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
