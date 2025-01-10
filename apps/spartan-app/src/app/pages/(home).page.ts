import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'spartan-app-home',

  imports: [HlmButtonDirective, NgIcon],
  viewProviders: [provideIcons({ heroUsers })],
  template: `
  hello
    <button hlmBtn>Button</button>

    <ng-icon hlm size='sm' name="heroUsers" />

  `,
})
export default class HomeComponent { }
