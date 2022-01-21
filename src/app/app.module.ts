import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome' ;
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { UserdetailsComponent } from './userdetails/userdetails.component';




@NgModule({



declarations: [
AppComponent,
HomeComponent,
AboutComponent,
ContactComponent,
ChatComponent,
LoginComponent,
NavbarComponent,
RegisterComponent,
FooterComponent,
UserdetailsComponent
],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule,
HttpClientModule,
// CarouselModule.forRoot(),
FontAwesomeModule
],
providers: [],
bootstrap: [AppComponent]
})





export class AppModule {

}