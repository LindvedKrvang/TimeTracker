import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormatTimerPipe } from './pipes/format-timer.pipe';
import {TimerComponent} from './components/timer/timer.component';
import { TimersContainerComponent } from './components/timers-container/timers-container.component';
import { LabsComponent } from './components/labs/labs.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    FormatTimerPipe,
    TimersContainerComponent,
    LabsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
