import {Component} from 'angular2/core';

import {SequencerService} from '../../services/sequencer.service';

@Component({
  selector: 'controls',
  template: require('./controls.html')
})
export class Controls {

  constructor(
    private sequencer: SequencerService
  ) { }

  play() {

  }

  stop() {

  }

  advanceAndPlay(steps = 1) {

  }

  get minTempo(): number {
    return 1;
  }

  get maxTemp(): number {
    return 200;
  }

  get playButtonClass(): string {
    if ( this.sequencer.isPlaying ) {
      return 'pause';
    } else {
      return 'play';
    }
  }
}
