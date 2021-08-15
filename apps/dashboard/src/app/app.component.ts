import { Component } from '@angular/core';


@Component({
  selector: 'estados-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Estados';
  links = [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'estados', icon: 'view_list', title: 'Estados'}
  ]
  
}
