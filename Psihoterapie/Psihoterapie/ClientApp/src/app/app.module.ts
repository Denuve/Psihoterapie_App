import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './admin/nav-menu/nav-menu.component';
import { HomeComponent } from './admin/home/home.component';
import { HomeUserComponent } from './user/home-user/home-user.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServiciiComponent } from './user/servicii/servicii.component';
import { ArticoleComponent } from './user/articole/articole.component';
import { DespremineComponent } from './user/despremine/despremine.component';
import { ProgramareComponent } from './user/programare/programare.component';
import { ContactComponent } from './user/contact/contact.component';
import { ArticolComponent } from './user/articol/articol.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminMessageComponent } from './Admin/admin-message/admin-message.component';
import { AdminAppointmentComponent } from './Admin/admin-appointment/admin-appointment.component';
import { AdminArchiveComponent } from './Admin/admin-archive/admin-archive.component';
import { PatientViewComponent } from './Admin/patient-view/patient-view.component';
import { RegisterComponent } from './register/register.component';
import { HttpRequestInterceptor } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HomeUserComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    ServiciiComponent,
    ArticoleComponent,
    DespremineComponent,
    ProgramareComponent,
    ContactComponent,
    ArticolComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminMessageComponent,
    AdminAppointmentComponent,
    AdminArchiveComponent,
    PatientViewComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule.forRoot([
      { path: '', component: HomeUserComponent, pathMatch: 'full' },
      { path: 'servicii', component: ServiciiComponent, pathMatch: 'full' },
      { path: 'articole', component: ArticoleComponent, pathMatch: 'full' },
        { path: 'articol/:id', component: ArticolComponent, pathMatch: 'full' },
      { path: 'despremine', component: DespremineComponent, pathMatch: 'full' },
      { path: 'programare', component: ProgramareComponent, pathMatch: 'full' },
      { path: 'contact', component: ContactComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: 'register', component: RegisterComponent, pathMatch: 'full' },
      { path: 'admin-home', component: AdminHomeComponent, pathMatch: 'full' },
      { path: 'admin-message', component: AdminMessageComponent, pathMatch: 'full' },
      { path: 'admin-appointment', component: AdminAppointmentComponent, pathMatch: 'full' },
      { path: 'admin-archive', component: AdminArchiveComponent, pathMatch: 'full' },
      { path: 'patient-view/:id', component: PatientViewComponent, pathMatch: 'full' },
    ])
  ],
  exports: [
    AngularMaterialModule
  ],
  providers: [
    HttpRequestInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
