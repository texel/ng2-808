import {Component} from 'angular2/core';

import * as _ from 'lodash';
import {SequencerService} from '../../services/sequencer.service';

@Component({
  selector: 'sequence-selector',
  template: require('./sequence-selector.html')
})
export class SequenceSelector {
  public patternNames = _.keys(this.seq.DEFAULT_PATTERNS);
  private _currentSequence: string;

  get currentSequence() {
    return this._currentSequence;
  }
  set currentSequence(s: any) {
    this._currentSequence = s;

    var sequenceData = this.seq.DEFAULT_PATTERNS[s];

    this.seq.loadSequence(sequenceData);
  }

  constructor(
    private seq: SequencerService
  ) {
    seq.samplesLoaded.then(() => {
      this.currentSequence = this.patternNames[0];
    });
  }

  pattern(name: string) {
    return this.seq.DEFAULT_PATTERNS[name];
  }

  dumpSequence() {
    console.debug('dump sequence!');
  }
}
