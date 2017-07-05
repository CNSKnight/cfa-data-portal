import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MdTabsModule, MdButtonModule } from '@angular/material';

import DLMyAccountComponent from './dl-my-account.component';
import MATokensComponent from './ma-tokens/ma-tokens.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MdTabsModule,
    MdButtonModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [
    DLMyAccountComponent,
    MATokensComponent
  ]
})
export default class DLMyAccountModule { }
