import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

    @ViewChild('sidenav') _sidenav: MatSidenav;

    constructor() {
    }

    ngOnInit(): void {
    }

    sidenavToggle(): void {
        this._sidenav.toggle().then();
    }

}
