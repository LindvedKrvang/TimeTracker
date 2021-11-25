import {Pipe, PipeTransform} from '@angular/core';

const FRAMES_PR_SECOND = 25;
const SECONDS_PR_MINUTE = 60;
const SECONDS_PR_HOUR = SECONDS_PR_MINUTE * SECONDS_PR_MINUTE;

@Pipe({
  name: 'formatTimer'
})
export class FormatTimerPipe implements PipeTransform {

  transform(timeInFrames: number): string {
    const frames: number = timeInFrames % FRAMES_PR_SECOND;
    const timeInSeconds: number = timeInFrames / FRAMES_PR_SECOND;
    const seconds: number = Math.floor(timeInSeconds % SECONDS_PR_MINUTE);
    const minutes: number = (Math.floor(timeInSeconds / SECONDS_PR_MINUTE)) % SECONDS_PR_MINUTE;
    const hours: number = Math.floor(timeInSeconds / SECONDS_PR_HOUR);

    return `${this.formatNumberLessThanTen(hours)}:${this.formatNumberLessThanTen(minutes)}:${this.formatNumberLessThanTen(seconds)}:${this.formatNumberLessThanTen(frames)}`;
  }

  private formatNumberLessThanTen(i: number): string {
    return i < 10 ? `0${i}` : i + '';
  }

}
