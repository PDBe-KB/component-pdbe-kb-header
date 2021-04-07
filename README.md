PDBe-KB Header Component
=

[![Build Status](https://www.travis-ci.com/PDBe-KB/component-pdbe-kb-header.svg?branch=main)](https://www.travis-ci.com/PDBe-KB/component-pdbe-kb-header)
[![codecov](https://codecov.io/gh/PDBe-KB/component-pdbe-kb-header/branch/main/graph/badge.svg?token=WVIZESHBOK)](https://codecov.io/gh/PDBe-KB/component-pdbe-kb-header)
[![Maintainability](https://api.codeclimate.com/v1/badges/55b0af0ca2064502aae5/maintainability)](https://codeclimate.com/github/PDBe-KB/component-pdbe-kb-header/maintainability)

This repository is for the codebase of a lightweight Angular v7 web component that provides a header/banner and some basic navigation.

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

In order to use all the features of this web component, retrieve the search-autocomplete component and replace the contents of the `src/app/seach-autocomplete` folder with those files.

The main template (i.e. `index.html` by default) should also have the following CSS imports:
```angular2html
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/theme-pdbe-green.css" type="text/css" media="all"/>
```

## Basic usage

The component can be added to any Angular v7 apps.

#### 1.) Import the component:

Import the component in `app.module.ts` by default.
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

#### 2.) Add the component to a template:
```angular2html
<app-header [data]="headerData"></app-header>
```

The data model for the input data is described in 
`src/app/app-header/app-header.models.ts`

##### Example input data

```angular2html
[
  {
    label: 'Summary',
    icon_class: 'icon-generic',
    icon_data_icon: 'H',
    section_div_id: 'summary',
    counts: null,
    description: ''
  }
]
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PDBe-KB/component-pdbe-kb-header/tags).

## Authors

* **Mihaly Varadi** - *Initial Implementation* - [mvaradi](https://github.com/mvaradi)

See also the list of [contributors](https://github.com/PDBe-KB/component-pdbe-kb-header/contributors) who participated in this project.

## License

This project is licensed under the EMBL-EBI License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

We would like to thank the [PDBe team](https://www.pdbe.org) and the [PDBe-KB partner resources](https://github.com/PDBe-KB/pdbe-kb-manual/wiki/PDBe-KB-Annotations) for their feedback and contributions.
