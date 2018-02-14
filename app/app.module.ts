import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// import {RouterModule} from '@angular/router';
import { HttpServiceService } from './services/http-service.service';
import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    SettingsComponent,
    HeaderComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
