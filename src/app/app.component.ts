import { Component } from '@angular/core';

import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firefox-IDB-test';

  public constructor(protected localStorage: LocalStorage) {
    console.log(localStorage);
    setTimeout(() => {
      this.doIt();
    }, 100)
  }

  public async doIt(): Promise<void> {
    console.log("Read");
    let val = await this.localStorage.getItem<string>('myKey').toPromise();
    console.log('Read: ', val);
    if (!val) {
      val = 'Test string';
    }

    try {
      console.log("write");
      await this.localStorage.setItem('myKey', val).toPromise();
      console.log('set item successfully');
    } catch (e) {
      console.log('Error setting item: ', e);
    }
  }
}
