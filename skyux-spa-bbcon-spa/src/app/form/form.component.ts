import { Component, OnInit } from '@angular/core';
import { Volunteer } from './volunteer.interface';

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html'
})

@Component({
  moduleId: module.id,
  selector: 'my-form',
  templateUrl: 'form.component.html',
})
export class FormComponent implements OnInit {
    public volunteer: Volunteer; // our model

    ngOnInit() {
      // we will initialize our form here
      this.volunteer = {
          fname: '',
          lname: '',
          email: '',
          nonProfit: '',
          event: '',
          hours: '',
          volDate: '',
          referral: ''
      };
    }

    save(model: Volunteer, isValid: boolean) {
        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
    }
}