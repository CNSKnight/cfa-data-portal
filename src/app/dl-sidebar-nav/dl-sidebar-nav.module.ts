import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DlSidebarNavComponent } from './dl-sidebar-nav.component';
import { RouterModule } from '@angular/router';
import { MdListModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdListModule
  ],
  declarations: [DlSidebarNavComponent],
  exports: [DlSidebarNavComponent]
})
export class DlSidebarNavModule { }
