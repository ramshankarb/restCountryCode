import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-regions',
  templateUrl: './all-regions.component.html',
  styleUrls: ['./all-regions.component.css']
})
export class AllRegionsComponent implements OnInit {

  public regionsArray = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania'
  ]

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }

}
