import {Component} from '@angular/core';
import {HeaderData, SummaryIcons} from './app-header/app-header.models';
import {MOCKDATA} from '../mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  summaryIcons: SummaryIcons[];
  headerData: HeaderData;

  constructor() {
    this.summaryIcons = MOCKDATA;

    this.headerData = {
      logo_url: 'https://www.ebi.ac.uk/pdbe/pdbe-kb/static/img/PDBe-KB-logo-white.png',
      nav_items: this.summaryIcons
    };
  }
}
