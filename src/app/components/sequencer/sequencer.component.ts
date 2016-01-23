import {Component} from 'angular2/core';

@Component({
  selector: 'sequencer',
  template: require('./sequencer.html')
})
export class Sequencer {
  public drumMachine = {masterPart: {}};
  public tracks = [{
    name: 'one'
  }];

  cellClass(part: any, step: number) {
    return '';
  }

  eventCellClass(part: any, event: any, index: number): string {
    return '';
  }

  get stepsRange(): number {
    return 1;
  }
}
