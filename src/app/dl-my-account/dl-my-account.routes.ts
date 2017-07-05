import { Routes } from '@angular/router';

import DLMyAccountComponent from './dl-my-account.component';
import MATokensComponent from './ma-tokens/ma-tokens.component';

const routes: Routes = [
  {
    path: 'my-account',
    component: DLMyAccountComponent,
    children: [
      {
        path: 'tokens',
        component: MATokensComponent,
        data: { label: 'Tokens' }
      },
      {
        path: '',
        component: MATokensComponent,
      }
    ],
  }
];

export default routes;
