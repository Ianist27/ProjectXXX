import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'Login',
        component: LoginComponent
      },
      {
        path: 'Admin',
        component: AdminComponent
      },
      {
        path: '',
        component: HomeComponent
      }, 

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
