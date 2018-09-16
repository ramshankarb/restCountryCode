import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { AllRegionsComponent } from './all-regions/all-regions.component';
import { CurrencyComponent } from './currency/currency.component';
import { LanguageComponent } from './language/language.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AllCountriesComponent,
    AllRegionsComponent,
    CurrencyComponent,
    LanguageComponent,
    SingleCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
