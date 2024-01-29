import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./navbar/navbar.component";
import { TodoComponent } from "./todo/todo.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
    declarations: [
      AppComponent,
      NavbarComponent,
      TodoComponent
    ],
    imports: [
      BrowserModule,
      HttpClientModule, 
      MatToolbarModule,
      BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }