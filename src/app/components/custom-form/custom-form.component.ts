import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {

  @Input()
  public masterData!: MasterDataControls;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface MasterDataControls {
  name: FormControl;
  lastName: FormControl;
  email: FormControl;
  age: FormControl;
}
