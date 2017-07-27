import { TestBed } from '@angular/core/testing';
import { expect, SkyAppTestModule } from '@blackbaud/skyux-builder/runtime/testing/browser';

// Component we're going to test
import { FormComponent } from './form.component';

describe('Form component', () => {

   /**
    * This configureTestingModule function imports SkyAppTestModule, which brings in all of
    * the SKY UX modules and components in your application for testing convenience. If this has
    * an adverse effect on your test performance, you can individually bring in each of your app
    * components and the SKY UX modules that those components rely upon.
    */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });
  });

  it('should display a new teammate when one is added', () => {
    // const name = 'Blackbaud';
    // const email = 'no-reply@blackbaud.com';
    // const fixture = TestBed.createComponent(FormComponent);

    // fixture.componentInstance.team.push({
    //   name: 'Blackbaud',
    //   email: 'no-reply@blackbaud.com'
    // });

    // fixture.detectChanges();
  });

});
