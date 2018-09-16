import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html'
})

export class SingleCountryComponent implements OnInit {
  public country: any;
  public detail: any;
  public currentCountry: any;
  public countryName: any;

  constructor(
    private _country: AppServiceService, 
    private _route: ActivatedRoute, 
    private router: Router, 
    private location: Location
  ) { }

  ngOnInit() {
    this.countryName = this._route.snapshot.paramMap.get('country');
    this._country.getAllCountries().subscribe(
      data => {
        this.country = data;  

      for (let i in this.country) {
          if ((this.country[i].name) == this.countryName) {
            this.currentCountry = this.country[i];
          }
        }
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    );
  }
  // Method for previous page
goBackToPreviousPage(): any {
  this.location.back();
}
}