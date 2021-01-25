import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularSocialLoginButtonsModule, AngularSocialLoginButtonsService } from 'angular-social-login-buttons';

// Configs
export function getAuthServiceConfigs() {
  const config = new AngularSocialLoginButtonsService();
  config.addGoogle('997007092677-7si65ru2k74be0ms4431k568f6sb655n.apps.googleusercontent.com');
  config.addLinkedin('86vu9nihqqxe76');
  console.log('configgg ');
  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSocialLoginButtonsModule
  ],
  providers: [{provide: AngularSocialLoginButtonsService,
    useFactory: getAuthServiceConfigs}],
  bootstrap: [AppComponent]
})
export class AppModule { }
