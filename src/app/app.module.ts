import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SearchAutocompleteComponent } from './search-autocomplete/search-autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SearchAutocompleteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
