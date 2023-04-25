import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Eloy';
  age = 29;
  img = 'https://cataas.com/cat';
  btnDisabled = true;
  person = {
    name: 'Eloy',
    age: 19,
    avatar: 'https://cataas.com/cat',
  };
}
