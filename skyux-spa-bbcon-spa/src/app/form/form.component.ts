import { Component, OnInit } from '@angular/core';
import { Volunteer } from './volunteer.interface';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html'
})

export class FormComponent implements OnInit {
    public volunteer: Volunteer; // our model
    constructor(private activatedRoute: ActivatedRoute) {}
    submitted = false;

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
      
      this.activatedRoute.queryParams.subscribe((params: Params) => {
          let referral = params['referralId'];
          console.log(referral);
        });      
    }

    save(model: Volunteer, isValid: boolean) {
        this.submitted = true;
        console.log(model, isValid);
    }

}