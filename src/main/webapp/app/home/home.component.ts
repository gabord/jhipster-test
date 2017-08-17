import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Account, LoginModalService, Principal } from '../shared';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.scss'
    ]

})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    events: any[];


    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();


         this.events = [
                {
                    "title": "All Day Event",
                    "start": "2016-01-01"
                },
                {
                    "title": "Long Event",
                    "start": "2016-01-07",
                    "end": "2016-01-10"
                },
                {
                    "title": "Repeating Event",
                    "start": "2016-01-09T16:00:00"
                },
                {
                    "title": "Repeating Event",
                    "start": "2016-01-16T16:00:00"
                },
                {
                    "title": "Conference",
                    "start": "2016-01-11",
                    "end": "2016-01-13"
                }
            ]}

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
}
