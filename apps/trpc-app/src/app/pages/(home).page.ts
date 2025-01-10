import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'trpc-app-home',

  imports: [AnalogWelcomeComponent],
  template: ` <trpc-app-analog-welcome /> `,
})
export default class HomeComponent {}
