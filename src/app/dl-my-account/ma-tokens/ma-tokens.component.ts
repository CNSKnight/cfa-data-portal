import { Component } from '@angular/core';

@Component({
  selector: 'ma-tokens',
  template: `
    <div fxFlexAlign="center">
      <button md-raised-button (click)="$event.stopPropagation(); getToken();">Get a Token</button>
    </div>
  `,
  styles: []
})
class MATokensComponent {

  public getToken() {
    console.log('getting a token');
  }

}

export default MATokensComponent;
