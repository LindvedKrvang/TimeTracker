import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss']
})
export class LabsComponent implements OnInit {

  @Input()
  public labs: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public getLabInMilliSecondsPrFrame(i: number): number {
    if (i === 0) {
        return this.labs[i];
    }

    return this.labs[i] - this.labs[i - 1];
  }
}
