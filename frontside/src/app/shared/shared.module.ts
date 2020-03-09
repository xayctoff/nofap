import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        NavbarComponent
    ]
})
export class SharedModule {
}
