import { Component } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public displayText$: Observable<string>;
  private displaySource: Subject<string> = new Subject();

  public ngOnInit(): void {
    this.displayText$ = this.displaySource.asObservable();
  }

  public updateText(): void {
    this.displaySource.next('Hello Subject');
    this.displaySource.error('Oh no!');
    this.displaySource.complete();
  }
}
