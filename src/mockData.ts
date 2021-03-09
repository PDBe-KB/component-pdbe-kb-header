import {SummaryIcons} from './app/app-header/app-header.models';

export const MOCKDATA: SummaryIcons[] = [
  {
    label: 'Summary',
    icon_class: 'icon-generic',
    icon_data_icon: 'H',
    section_div_id: 'summary',
    counts: null,
    description: ''
  },
  {
    label: 'Structures',
    icon_class: 'icon-conceptual',
    icon_data_icon: 's',
    section_div_id: 'structures',
    counts: -1,
    description: 'Click on this icon to see all the PDB entries available for this protein'
  },
  {
    label: 'Ligands',
    icon_class: 'icon-conceptual',
    icon_data_icon: 'b',
    section_div_id: 'ligands',
    counts: -1,
    description: 'Click on this icon to see all the ligands observed in the same PDB entries as this protein'
  },
  {
    label: 'Interactions',
    icon_class: 'icon-conceptual',
    icon_data_icon: 'y',
    section_div_id: 'interactions',
    counts: -1,
    description: 'Click on this icon to see all the macromolecular interaction partners \n' +
      'observed in the same PDB entries as this protein'
  },
  {
    label: 'Functional annotations',
    icon_class: 'icon-conceptual',
    icon_data_icon: 'c',
    section_div_id: 'annotations',
    counts: -1,
    description: 'Click on this icon to see all the additional annotations derived from PDB structures for this protein'
  },
  {
    label: 'Similar proteins',
    icon_class: 'icon-conceptual',
    icon_data_icon: 'o',
    section_div_id: 'similar-proteins',
    counts: -1,
    description: 'Click on this icon to see all the proteins that are minimum 90% identical to this protein'
  },
  {
    label: 'Publications',
    icon_class: 'icon-generic',
    icon_data_icon: 'P',
    section_div_id: 'publications',
    counts: -1,
    description: 'Click on this icon to see all the primary PDB publications, publications from UniProt and other reviews'
  }
];
