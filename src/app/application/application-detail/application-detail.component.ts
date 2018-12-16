import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sample-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.scss'],
})
export class ApplicationDetailComponent implements OnInit {
  id: any;
  constructor(private ac: ActivatedRoute) {}
  ngOnInit() {
    this.id = this.ac.params;
  }
}
