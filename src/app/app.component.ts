import { Component } from '@angular/core';
import {StaticCompoentComponent} from './components/static-compoent/static-compoent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FactoryStuff';
  dynComp = StaticCompoentComponent;
}
