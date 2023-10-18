import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IuComponentsModule } from '@myngapp/iu/components';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  imports: [BrowserModule, CommonModule, IuComponentsModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent, HelloWorldComponent],
})
export class AppModule {}
