import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/index/signup/signup.component';
import { DemoComponent } from './components/index/demo/demo.component';
import { HeaderComponent } from './components/index/header/header.component';
import { FooterComponent } from './components/index/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
