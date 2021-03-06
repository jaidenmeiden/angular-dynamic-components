import { Component } from '@angular/core';
import {ExampleComponent} from "./components/example/example.component";
import {DialogService} from "./dialog/services/dialog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dynamic-components';
  constructor(public dialog: DialogService) {
    const ref = this.dialog.open(ExampleComponent, {
      data: { message: 'I am a dynamic component inside of a dialog!' },
    });

    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result)
    });
  }
}
