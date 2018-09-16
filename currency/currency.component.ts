import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { AppServiceService } from '../app-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html'
})
export class CurrencyComponent implements OnInit {

  currency: any;
  allCountries;
  constructor(
   private _allCountries: AppServiceService, 
   private _route: ActivatedRoute, 
   private location: Location
  ) { }

  ngOnInit() {
 
    this.currency = this._route.snapshot.paramMap.get('currency');
    this._allCountries.getCountriesByCurrency(this.currency).subscribe
      (data => {
        this.allCountries = data;},
      error => {
        console.log(error);
      })
  }
  // Method for previous page
  goBackToPreviousPage(): any {
    this.location.back();
  }
}