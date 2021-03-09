import {Component, Input, SimpleChanges, OnChanges} from '@angular/core';
import {HeaderData} from './app-header.models';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnChanges {

  @Input() data: HeaderData;

  @Input() activeSection;

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
