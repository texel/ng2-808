import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES, FORM_PROVIDERS, FORM_DIRECTIVES} from 'angular2/common';

import {SequencerService} from './services/sequencer.service';

import {Controls, SequenceSelector, Sequencer} from './components';

let styles = require('./ng-808.scss');

@Component({
  selector: 'ng-808',
  template: require('./ng-808.html'),
  providers: [FORM_PROVIDERS, SequencerService],
  directives: [
    COMMON_DIRECTIVES,
    FORM_DIRECTIVES,
    Controls,
    SequenceSelector,
    Sequencer
  ]
})
export class Ng808 {
  constructor(
    private sequencer: SequencerService
  ) {
    console.debug('ng808!');
  }
}
