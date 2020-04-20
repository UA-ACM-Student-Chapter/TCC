import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  goToSection(link, conf): void {
    this.router.navigate([link], { state: { data: conf } });
    console.log(this.router.url)
  }

  ngOnInit() {
  }

}
