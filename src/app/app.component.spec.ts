import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppHeaderComponent} from './app-header/app-header.component';
import {Component} from '@angular/core';

@Component({
  selector: 'search-autocomplete',
  styles: [''],
  template: '<html></html>'
})
class SearchAutocompleteComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppHeaderComponent,
        SearchAutocompleteComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
