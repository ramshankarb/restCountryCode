import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { AppServiceService } from '../app-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html'
})
export class LanguageComponent implements OnInit {
  language:any;
  allCountries;
  languageName:any;
  constructor(private _allCountries: AppServiceService, private _route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.language = this._route.snapshot.paramMap.get('language');
    this.languageName = this._route.snapshot.paramMap.get('name');
    this._allCountries.getCountriesByLang(this.language).subscribe
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