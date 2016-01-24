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

  get currentStep(): number {
    return 0;
  }

  cellClass(part: any, step: number) {
    // Hack
    part.sequence = {currentStep: 0, numSteps: 8};
    if ( this.currentStep === step ) {
      return 'current';
    } else if ( part.sequence.currentStep === step ) {
      return 'ghost-current';
    } else {
      return '';
    }
  }

  eventCellClass(part: any, event: Shabu.PatternEvent, index: number): string {
    var descriptors = [];
    // Hack
    part.sequence = {currentStep: 0, numSteps: 8};

    descriptors.push( this.cellClass(part, index) );
    descriptors.push( {0: 'off', 0.5: 'on', 1: 'accent'}[event.level] );

    if ( index >= part.sequence.numSteps ) {
      descriptors.push( 'ghost' );
    }

    if ( (index % part.sequence.numSteps) === (part.sequence.numSteps - 1) ) {
      descriptors.push( 'end' );
    }

    return descriptors.join(' ');
  }

  triggerPart(track: Shabu.PatternTrack, level: number) {
    this.seq.playTrack(track, level);
  }

  levelFromMouseEvent(event: MouseEvent): number {
    var height  = $(event.currentTarget).outerHeight();
    var offset  = height - event.offsetY;

    return offset / height;
  }

  toggleLevel(track: Shabu.PatternTrack, event: Shabu.PatternEvent, index: number) {
    let add;
    let $event = $(event);

    if ( $event.shiftKey ) {
      add = 1.0;
    } else {
      add = 0.5;
    }

    var level = ( event.level + add );

    if ( level > 1 ) {
      level = 0;
    }

    console.debug('event level is', event, event.level);

    event.level = level;
    this.triggerPart(track, level);
  }

  get stepsRange(): number {
    return 1;
  }
}
