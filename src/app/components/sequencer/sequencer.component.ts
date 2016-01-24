import {Component} from 'angular2/core';
import {DEFAULT_SEQUENCE, SequencerService} from '../../services/sequencer.service';
import * as Shabu from 'shabushabu';

let $ = require('jquery');

@Component({
  selector: 'sequencer',
  template: require('./sequencer.html')
})
export class Sequencer {
  public drumMachine = {masterPart: {}};
  public headerSteps = DEFAULT_SEQUENCE.map((_, i) => i + 1);

  constructor(
    private seq: SequencerService
  ) { }

  get tracks(): Shabu.PatternTrack[] {
    return this.seq.tracks;
  }

  cellClass(part: any, step: number) {
    return '';
  }

  eventCellClass(part: any, event: any, index: number): string {
    return '';
  }

  triggerPart(part: Shabu.PatternTrack, event: MouseEvent) {
    var height  = $(event.currentTarget).outerHeight();
    var offset  = height - event.offsetY;
    var level   = offset / height;

    this.seq.playTrack(part, level);
  }

  get stepsRange(): number {
    return 1;
  }
}
