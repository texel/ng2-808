import {Component} from 'angular2/core';
import {DEFAULT_SEQUENCE, SequencerService} from '../../services/sequencer.service';
import * as Shabu from 'shabushabu';

import {EventPatternTrack} from '../../models/event-pattern-track.model';

let $ = require('jquery');

@Component({
  selector: 'sequencer',
  template: require('./sequencer.html')
})
export class Sequencer {
  public drumMachine = {masterPart: {}};
  public headerSteps = DEFAULT_SEQUENCE.map((_, i) => i + 1);

  private _currentPos = 0;
  private _scheduled = false;

  constructor(
    private seq: SequencerService
  ) { }

  get tracks(): Shabu.PatternTrack[] {
    return this.seq.tracks;
  }

  get currentStep(): number {
    if ( this._currentPos != this.seq.currentPosition && !this._scheduled ) {
      setTimeout(() => {
        this._currentPos = this.seq.currentPosition;
        this._scheduled = false;

      }, 10);

      this._scheduled = true;
    }

    return this._currentPos;
  }

  cellClass(track: EventPatternTrack, step: number) {
    if ( this.currentStep === step ) {
      return 'current';
    } else if ( track.isCurrentPos(this.currentStep, step) ) {
      return 'ghost-current';
    } else {
      return '';
    }
  }

  eventCellClass(track: EventPatternTrack, event: Shabu.PatternEvent, index: number): string {
    var descriptors = [];

    descriptors.push( this.cellClass(track, index) );
    descriptors.push( {0: 'off', 0.5: 'on', 1: 'accent'}[event.level] );

    if ( index >= track.length ) {
      descriptors.push( 'ghost' );
    }

    if ( (index % track.length) === (track.length - 1) ) {
      descriptors.push( 'end' );
    }

    return descriptors.join(' ');
  }

  triggerPart(index: number, level: number) {
    this.seq.playSample(index, level);
  }

  levelFromMouseEvent(event: MouseEvent): number {
    var height  = $(event.currentTarget).outerHeight();
    var offset  = height - event.offsetY;

    return offset / height;
  }

  get eventTracks(): EventPatternTrack[] {
    return this.seq.eventTracks;
  }

  toggleLevel(index: number, event: Shabu.PatternEvent) {
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

    event.level = level;

    this.triggerPart(index, level);
  }
}
