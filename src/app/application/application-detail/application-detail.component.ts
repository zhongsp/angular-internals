import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sample-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.scss'],
})
export class ApplicationDetailComponent implements OnInit {
  id: any;
  constructor(private ar: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.id = this.ar.params;
    debugger
    console.log(this.router.routerState);
  }
}
