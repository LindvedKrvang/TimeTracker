import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Timer} from '../../model/Timer';

const FRAME_IN_MS = 40;

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input()
  public timer: Timer;

  @Output()
  private removeEmitter: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  startTimer(): void {
    if (!this.timer.isRunning)
    {
      this.timer.isRunning = true;
      this.timer.timerId = setInterval(() => {
        this.timer.timeInMilliSecondsPrFrame = ++this.timer.timeInMilliSecondsPrFrame;
      }, FRAME_IN_MS);
    }
  }

  stopTimer(): void {
    if (this.timer.isRunning)
    {
      this.timer.isRunning = false;
      clearInterval(this.timer.timerId);
      this.timer.timerId = undefined;
    }
  }

  resetTimer(): void {
    this.timer.timeInMilliSecondsPrFrame = 0;
    this.timer.labs = [];
  }

  markLap(): void {
    if (!this.timer.isRunning) {
      return;
    }

    this.timer.labs.push(this.timer.timeInMilliSecondsPrFrame);
  }

  removeTimer(): void {
    this.removeEmitter.emit();
  }
}
