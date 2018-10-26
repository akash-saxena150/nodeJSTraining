import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {Route, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import {apiService} from './api.service'
const routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children:[
    {path: ':id/:name', component: UserComponent}
  ]},
  {path: 'servers',canActivateChild: [AuthGuard], component: ServersComponent, children:[
    {path: ':id', component: ServerComponent},
    {path: ':id/edit', component: EditServerComponent}
  ]},
  {path: 'signup', component: SignupFormComponent},
  {path: 'nopage', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/nopage'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    SignupFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServersService, AuthGuard, AuthService, apiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
