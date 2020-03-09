import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { NavbarComponent } from './navbar/navbar.component';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        HttpClientModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        TranslateModule.forRoot({
            defaultLanguage: 'ru',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],
    exports: [
        FlexLayoutModule,
        HttpClientModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        NavbarComponent,
        TranslateModule
    ]
})
export class SharedModule {
}

//  Required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
