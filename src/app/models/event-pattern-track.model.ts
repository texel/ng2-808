import * as Shabu from 'shabushabu';

export class EventPatternTrack {
  public events: EventProxy[];

  constructor(
    private patternTrack: Shabu.PatternTrack
  ) {
    this.updateEvents();
  }

  get name(): string {
    return this.patternTrack.name;
  }

  get length(): number {
    return this.patternTrack.length;
  }
  set length(l: number) {
    this.patternTrack.length = l;

    this.updateEvents();
  }

  updateEvents() {
    this.events = this.patternTrack.steps.map((s, index) => {
      return new EventProxy(this.patternTrack.eventAtPosition(index));
    });
  }
}

export class EventProxy {
  constructor(
    private event: Shabu.PatternEvent
  ) {}

  get level(): number {
    return this.event.level;
  }
  set level(l: number) {
    this.event.level = l;
  }
}
