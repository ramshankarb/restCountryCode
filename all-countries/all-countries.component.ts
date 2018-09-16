import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  region: any;
  countryname: any;
  language: any;
  public allCountries: any = [];

  constructor(private _allCountries: AppServiceService,
    private _route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.region = this._route.snapshot.paramMap.get('region');
    console.log(this.region);
    this._allCountries.getCountriesByRegion(this.region).subscribe
      (data => {
        this.allCountries = data;
      },
      error => {
        console.log(error);
      })
  }

  // Method for previous page
  goBackToPreviousPage(): any {
    this.location.back();
  }

}
