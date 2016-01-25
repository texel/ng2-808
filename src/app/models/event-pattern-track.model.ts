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

  set steps(s: number[]) {
    this.patternTrack.steps = s;

    this.updateEvents();
  }

  updateEvents() {
    this.events = this.patternTrack.steps.map((s, index) => {
      return new EventProxy(this.patternTrack.eventAtPosition(index));
    });
  }

  isCurrentPos(current: number, pos: number): boolean {
    return current % this.patternTrack.length === pos;
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
