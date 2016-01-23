import {Component} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';

import {SequencerService} from './services/sequencer.service';

let styles = require('./ng-808.scss');

@Component({
  selector: 'ng-808',
  template: require('./ng-808.html'),
  providers: [SequencerService]
})
export class Ng808 {
  constructor(
    private sequencer: SequencerService
  ) {
    console.debug('ng808!');
  }
}
