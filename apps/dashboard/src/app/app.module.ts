import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './app-routing.module';
import { EstadosComponent } from './estados/estados.component';
import { EstadosDetailsComponent } from './estados/estados-details/estados-details.component';
import { EstadosListComponent } from './estados/estados-list/estados-list.component';
import { CoreDataModule } from "@estados/core-data";
import { CoreStateModule } from "@estados/core-state";
import { MaterialModule } from "@estados/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AppComponent, EstadosComponent, EstadosDetailsComponent, EstadosListComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
