PDBe-KB Header Component
=

This is the repository of a lightweight Angular 7+ web component that provides a header/banner and some basic navigation.

This component is used on the PDBe-KB Aggregated Views of Proteins and PDBe-KB Aggregated Views of Ligands.

**Important:** This web component depends on the "search-autocomplete" component which is available from [https://github.com/PDBeurope/pdbe-autocomplete-search](https://github.com/PDBeurope/pdbe-autocomplete-search)

### Example:

<img src="https://raw.githubusercontent.com/PDBe-KB/component-pdbe-kb-header/main/pdbe-kb-app-header.png">

## Quick Start

Get the code and install dependencies
```
git clone https://github.com/PDBe-KB/component-pdbe-kb-header.git
cd component-pdbe-kb-header
npm i
```

Running the app
```
ng serve
```

Running tests
```
ng test
```

## Dependencies

This web component embeds another PDBe web component: [https://github.com/PDBeurope/pdbe-autocomplete-search](https://github.com/PDBeurope/pdbe-autocomplete-search)

In order to use all the features of this web component, retrieve the search-autocomplete component and replace the contents of the "src/app/seach-autocomplete" folder with those files.

## Basic usage

The component can be added to any Angular7+ apps.

Import the component (e.g. in app.module.ts):
```
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


```

Adding the pinging component to a template:
```angular2html
<app-header [data]="headerData"></app-header>
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PDBe-KB/component-pdbe-kb-header/tags).

## Authors

* **Mihaly Varadi** - *Migrating to GitHub* - [mvaradi](https://github.com/mvaradi)

See also the list of [contributors](https://github.com/PDBe-KB/component-pdbe-kb-header/contributors) who participated in this project.

## License

This project is licensed under the EMBL-EBI License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

We would like to thank the [PDBe team](https://www.pdbe.org) and the [PDBe-KB partner resources](https://github.com/PDBe-KB/pdbe-kb-manual/wiki/PDBe-KB-Annotations) for their feedback and contributions.
