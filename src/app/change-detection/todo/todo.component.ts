import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";

@Component({
  selector: "sample-todo",
  template: `
    <h3>ChangeDetectionStrategy.OnPush</h3>
    <section>
      {{datetime.timestamp}}
    </section>
    <section>{{title}}</section>
    <button (click)="detect()">detectChanges()</button>
    <button (click)="mark()">markForCheck()</button>
    <button (click)="noop()">noop()</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @Input() datetime: any;
  @Input() title: string;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.cd.detach();
  }

  detect() {
    this.cd.detectChanges();
  }

  mark() {
    this.cd.markForCheck();
  }

  noop() {}
}
