import * as Shabu from 'shabushabu/ts/index';
import * as _ from 'lodash';

import {EventPatternTrack, EventProxy} from '../models/event-pattern-track.model';
import {DEFAULT_PATTERNS} from '../lib/default-patterns.ts';

const DEFAULT_PARTS: {[key: string]: string} = {
  'Kick': 'kick_1',
  'Snare': 'snare_1',
  'LoConga': 'lo_conga',
  'MidConga': 'med_conga',
  'HiConga': 'hi_conga',
  'Rim': 'rim',
  'Clap': 'clap',
  'CowBell': 'cowbell',
  'Ride': 'ride',
  'OpenHat': 'open_hat',
  'ClosedHat': 'closed_hat',
  'Shaker': 'shaker'
};

export const DEFAULT_SEQUENCE = [
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0
];

export class SequencerService {

  public samplesLoaded: Promise<any[]>;

  private engine = Shabu.NewEngine();
  private sequencer = new Shabu.Sequencer(this.engine, 120);
  private padSampler = new Shabu.PadSampler(this.engine, 12);
  private eventPatternTracks: EventPatternTrack[];

  public DEFAULT_PATTERNS = DEFAULT_PATTERNS;

  constructor() {
    console.debug('sequencer service!');

    // Debug all the things!
    // this.engine.debug = true;
    // this.sequencer.debug = true;
    // this.padSampler.debug = true;

    this.sequencer.patternLength = DEFAULT_SEQUENCE.length;

    this.samplesLoaded = Promise.all(
      _.map(DEFAULT_PARTS, (filename, name) => {
        return this.engine.loadSample(name, `/assets/samples/${filename}.wav`);
      })
    );

    this.samplesLoaded.then(samples => {
      samples.forEach((s, index) => {
        this.padSampler.loadPad(index, this.engine.samples[s]);
        this.sequencer.addTrack(s, DEFAULT_SEQUENCE, true);
      });

      this.eventPatternTracks = this.sequencer.patternTracks.map(t => new EventPatternTrack(t));
      this.sequencer.connect(this.padSampler);
    });
  }

  play() {
    this.sequencer.start();
  }

  stop() {
    this.sequencer.stop();
  }

  playSample(index: number, volume = 1) {
    this.padSampler.playPad(index, 0, volume);
  }

  get tracks(): Shabu.PatternTrack[] {
    return this.sequencer.patternTracks;
  }

  get eventTracks(): EventPatternTrack[] {
    return this.eventPatternTracks;
  }

  get isPlaying(): boolean {
    return this.sequencer.playing;
  }

  get currentPosition(): number {
    return this.sequencer.patternPos;
  }

  get tempo(): number {
    return this.sequencer.bpm;
  }
  set tempo(t: number) {
    this.sequencer.bpm = t;
  }

  get swing(): number {
    return this.sequencer.swingFactor * 100;
  }
  set swing(s: number) {
    this.sequencer.swingFactor = s * 0.01;
  }

  clearAllSequences() {
    this.eventTracks.forEach(t => {
      t.steps = DEFAULT_SEQUENCE;
      t.length = DEFAULT_SEQUENCE.length;
    });
  }

  loadSequence(sequence: any) {
    this.tempo = sequence.tempo;
    this.swing = sequence.swingPercent;

    this.clearAllSequences();

    _.each(sequence.pattern, (levels, name) => {
      let track: EventPatternTrack = this.eventTracks.find(t => t.name === name);

      let paddedLevels: number[] = [];

      _.range(32).forEach(i => {
        paddedLevels[i] = levels[i] || 0;
      });

      if (track) {
        track.steps = paddedLevels;
        track.length = levels.length;
      }
    });
  }
}
