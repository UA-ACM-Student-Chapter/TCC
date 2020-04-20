import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
    console.log(history.state.data);
  }

  ngOnChanges() {
    console.log(history.state.data);
  }
}
