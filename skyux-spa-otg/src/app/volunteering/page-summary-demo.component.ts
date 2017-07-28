import { Component } from '@angular/core';

@Component({
  selector: 'sky-page-summary-demo',
  templateUrl: './page-summary-demo.component.html'
})
export class SkyPageSummaryDemoComponent {
  public name = 'Water Mission';

  public showAlert = true;

  public showTitle = true;

  public showSubtitle = true;

  public showStatus = true;

  public showContent = true;

  public showKeyInfo = true;

  //

  public showImage = true;

  public avatarUrl: string | File = 'https://pbs.twimg.com/profile_images/748586337012375552/RynqANia.jpg';

  public get src(): string | File {
    return this.showImage ?  this.avatarUrl : undefined;
  }
}
