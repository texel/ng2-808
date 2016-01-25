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
    this.sequencer.play();
  }

  stop() {
    this.sequencer.stop();
  }

  advanceAndPlay(steps = 1) {

  }

  get minTempo(): number {
    return 1;
  }

  get maxTempo(): number {
    return 200;
  }

  get validTempo(): boolean {
    return this.sequencer.tempo > 20 &&
        this.sequencer.tempo <= 240;
  }

  get playButtonClass(): string {
    if ( this.sequencer.isPlaying ) {
      return 'pause';
    } else {
      return 'play';
    }
  }
}
