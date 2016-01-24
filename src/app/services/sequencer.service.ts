import {Injectable} from 'angular2/core';
import * as Shabu from 'shabushabu/ts/index';

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

    let samplesLoaded = Promise.all([
      this.engine.loadSample('kick', '/assets/samples/kick_1.wav')
    ]);

    samplesLoaded.then(samples => {
      samples.forEach(s => {
        this.sequencer.addSampleTrack(s, this.engine.samples[s], [0, 1, 0, 1]);
      });
    });
  }

  playTrack(track: Shabu.PatternTrack, volume = 1) {
    this.engine.playBuffer(track.sample, volume, 1, 0);
  }

  get tracks(): Shabu.PatternTrack[] {
    return this.sequencer.patternTracks;
  }

  get isPlaying(): boolean {
    return false;
  }
}
