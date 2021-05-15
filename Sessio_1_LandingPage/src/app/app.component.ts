import { Component } from '@angular/core';
import { Person} from './interface/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title : string =  'boilerplate-upgrade';
  public person? : Person= {
    name: "juli",
    lastname: "gonza",
  }


}
