import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rest Countries';
  public regionsArray = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania'
  ]
}
