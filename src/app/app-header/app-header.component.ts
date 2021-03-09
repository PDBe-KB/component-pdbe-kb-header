import {Component, Input, SimpleChanges, OnChanges} from '@angular/core';
import {HeaderData} from './app-header.models';
import * as appSettings from '../app.settings';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnChanges {

  @Input() data: HeaderData;

  @Input() activeSection;

  autoCompleteConfigRight = {
    resultBoxAlign: 'right',
    redirectOnClick: true,
    searchUrl: appSettings.pdbeUrl + 'search/pdb-autocomplete/select',
    fields: 'value,num_pdb_entries,var_name',
    group: 'group=true&group.field=category',
    groupLimit: '25',
    sort: 'category+asc,num_pdb_entries+desc',
    additionalParams: 'rows=20000&json.nl=map&wt=json'
  };

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    if (changes.activeSection && !changes.activeSection.firstChange) {
      this.activeSection = changes.activeSection.currentValue;
    }
  }

  scrollToId(id: string) {
    /*
     * Scroll the window to a div based on the id
     *
     * @param id - A <div> id
     */
    document.getElementById(id).scrollIntoView(true);
  }
}
