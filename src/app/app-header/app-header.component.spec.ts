import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderComponent } from './app-header.component';
import {HeaderData, SummaryIcons} from './app-header.models';
import {Component} from '@angular/core';

@Component({
  selector: 'search-autocomplete',
  styles: [''],
  template: '<html></html>'
})
class SearchAutocompleteComponent {}

export const TEST_SUMMARY_ICONS: SummaryIcons[] = [
  { label: 'label_null', icon_class: 'icon-generic', icon_data_icon: 'H', section_div_id: 'label_null', counts: null, description: ''},
  { label: 'label_one', icon_class: 'icon-conceptual', icon_data_icon: 's', section_div_id: 'label_one', counts: 1, description: ''},
  { label: 'label_zero', icon_class: 'icon-conceptual', icon_data_icon: 'b', section_div_id: 'label_zero', counts: 0, description: ''},
];

export const TEST_HEADER_DATA: HeaderData = {
  logo_url: 'url',
  nav_items: TEST_SUMMARY_ICONS
};

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderComponent, SearchAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    component.data = TEST_HEADER_DATA;
    component.scrollToId = function (x: any) {};
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
