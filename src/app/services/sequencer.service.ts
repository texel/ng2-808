import {Injectable} from 'angular2/core';
import * as Shabu from 'shabushabu/ts/index';
import * as _ from 'lodash';

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

export const DEFAULT_SEQUENCE = [0, 0, 0, 0, 0, 0, 0, 0];

export class SequencerService {

  private engine = Shabu.NewEngine();
  private sequencer = new Shabu.Sequencer(this.engine, 120);
  private padSampler = new Shabu.PadSampler(this.engine, 12);

  constructor() {
    console.debug('sequencer service!');

    // Debug all the things!
    this.engine.debug = true;
    this.sequencer.debug = true;
    this.padSampler.debug = true;

    let samplesLoaded = Promise.all(
      _.map(DEFAULT_PARTS, (filename, name) => {
        return this.engine.loadSample(name, `/assets/samples/${filename}.wav`);
      })
    );

    samplesLoaded.then(samples => {
      samples.forEach((s, index) => {
        this.padSampler.loadPad(index, this.engine.samples[s]);
        this.sequencer.addTrack(s, DEFAULT_SEQUENCE);
      });

      this.sequencer.connect(this.padSampler);
    });
  }

  play() {
    this.sequencer.start();
  }

  stop() {
    this.sequencer.stop();
  }

  playTrack(track: Shabu.PatternTrack, volume = 1) {
    this.engine.playBuffer(track.sample, volume, 1, 0);
  }

  playSample(index: number, volume = 1) {
    this.padSampler.playPad(index, 0, volume);
  }

  get tracks(): Shabu.PatternTrack[] {
    return this.sequencer.patternTracks;
  }

  get isPlaying(): boolean {
    return false;
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
}
