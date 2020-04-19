import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
    console.log(history.state.data);
  }

  ngOnChanges() {
    console.log(history.state.data);
  }



}
