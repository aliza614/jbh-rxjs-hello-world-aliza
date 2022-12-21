import { Component } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public displayText: Observable<string>;

  public ngOnInit(): void {
    this.displayText = new Observable((subscriber) => {
      subscriber.next('Hello world');
      //subscriber.error('Whoop!');
      subscriber.next('After');
      subscriber.complete();
      //anything after a complete or error does not work
      //for example this does not say done
      subscriber.next('Done');
    });
  }

  public updateText(): void {}
}
