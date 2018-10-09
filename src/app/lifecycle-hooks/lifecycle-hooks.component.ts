import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sample-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit {
  @Input() title: string;

  constructor() { 
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('ngOnChanges', arguments);
  }

  ngOnInit() {
    console.log('ngOnInit', arguments);
  }

  ngDoCheck() {
    console.log('ngDoCheck', arguments);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit', arguments);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked', arguments);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', arguments);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked', arguments);
  }

  ngOnDestroy() {
    console.log('ngAfterViewChecked', arguments);
  }

}
