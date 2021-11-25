import { Component, OnInit } from '@angular/core';
import {Timer} from '../../model/Timer';

@Component({
  selector: 'app-timers-container',
  templateUrl: './timers-container.component.html',
  styleUrls: ['./timers-container.component.scss']
})
export class TimersContainerComponent implements OnInit {

  public timers: Timer[] = [];

  constructor() { }

  ngOnInit(): void {
    this.addTimer();
  }

  public addTimer(): void {
    this.timers.push({
      timerId: undefined,
      isRunning: false,
      timeInMilliSecondsPrFrame: 0,
      // timeInMilliSecondsPrFrame: 25,  // 1 second
      // timeInMilliSecondsPrFrame: 1499,  // short of 1 minute
      // timeInMilliSecondsPrFrame: 14999,  // short of 10 minutes
      // timeInMilliSecondsPrFrame: 89999,  // short of 1 hour
      // timeInMilliSecondsPrFrame: 899999,  // short of 10 hours
      labs: []
    } as Timer);
  }

  public removeTimer(index: number): void {
    this.timers.splice(index, 1);
  }

}
