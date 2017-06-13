import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './components/main.component';
import { HeaderComponent } from './components/header.component';
import { BodyComponent } from './components/body.component';
import { HttpService } from './services/http.service';
@NgModule({
    imports: [BrowserModule, HttpModule],
    providers: [HttpService],
    declarations: [MainComponent, HeaderComponent, BodyComponent],
    bootstrap: [MainComponent]
})
export class AppModule { }