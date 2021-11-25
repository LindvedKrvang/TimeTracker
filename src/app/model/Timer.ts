export interface Timer {
  timerId: number;
  isRunning: boolean;
  timeInMilliSecondsPrFrame: number;
  labs: number[];
}
