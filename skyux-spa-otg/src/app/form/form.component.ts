import { Component, OnInit } from '@angular/core';
import {Event} from './event.interface';

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{
 
  public event: Event;
  
  submitted = false;

  onSubmit() { this.submitted = true; }
  
  ngOnInit() {
    this.event = {
      eventname: '',
      date: ''
    };

  }
}
