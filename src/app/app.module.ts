import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { UserComponent } from './user/user.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserReposComponent } from './user-repos/user-repos.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GithubUserComponent,
    UserComponent,
    UserSearchComponent,
    UserReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
