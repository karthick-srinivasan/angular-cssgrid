import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// import {RouterModule} from '@angular/router';
import { HttpServiceService } from './services/http-service.service';
import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
