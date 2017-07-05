import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import myAcctRoutes from './dl-my-account.routes';

import { filter, map } from 'ramda';

@Component({
  selector: 'dl-my-account',
  templateUrl: './dl-my-account.component.html',
  styleUrls: ['./dl-my-account.component.css']
})
class DLMyAccountComponent implements OnInit {
  public navTabLinks = [];
  constructor(router: Router) {
    this.navTabLinks = filter((route) => {
      return route.path;
    }, myAcctRoutes[0].children).map((route) => {
      return { path: route.path, label: route.data.label };
    });
  }

  public ngOnInit() {
    // tbc
  }

}

export default DLMyAccountComponent;
