import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cmp1Component } from './cmp1/cmp1.component';

@NgModule({
  declarations: [
    AppComponent,
    Cmp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [Cmp1Component]
})
export class AppModule { }
