import { Component } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './form.component.html'
})
export class AboutComponent {
  public team = [
    {
      name: 'Robert Hernandez',
      email: 'rh@edu.org'
    },
    {
      name: 'Samantha Jones',
      email: 'sam@jones.com'
    },
    {
      name: 'Michael Jordan',
      email: 'michael@jordon.net'
    }
  ];

  constructor() {}
}
