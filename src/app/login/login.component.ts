import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    public model: any = {};
    public loading = false;
    public error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    public ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    public login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe((result) => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
