import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlexibleButtonComponentComponent } from './components/flexible-button-component/flexible-button-component.component';

@NgModule({
  declarations: [AppComponent, FlexibleButtonComponentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
