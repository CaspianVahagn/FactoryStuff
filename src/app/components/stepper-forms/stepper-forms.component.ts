import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MasterDataControls} from '../custom-form/custom-form.component';

@Component({
  selector: 'app-stepper-forms',
  templateUrl: './stepper-forms.component.html',
  styleUrls: ['./stepper-forms.component.scss']
})
export class StepperFormsComponent implements OnInit {

  MasterData: MasterDataControls = this.buildMasterDataSchema();
  SecondPersonData: MasterDataControls = this.buildMasterDataSchema();
  TravelPersonData: MasterDataControls = this.buildMasterDataSchema();

  concatFormGroup!: FormGroup;
  masterDataGroup!: FormGroup;
  travelPersonGroup!: FormGroup;
  secondPersonFormGroup!: FormGroup;
  isEditable = true;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.masterDataGroup = this._formBuilder.group(this.MasterData);
    this.travelPersonGroup = this._formBuilder.group(this.TravelPersonData);
    this.secondPersonFormGroup = this._formBuilder.group(this.SecondPersonData);
    this.buildLargeForm();
  }

  private buildLargeForm(): void {
    this.concatFormGroup = this._formBuilder.group({
      main: this.travelPersonGroup,
      sec: this.secondPersonFormGroup,
    });
  }

  public persistPayer(masterDataGroup: MasterDataControls): void {
    for (const e in masterDataGroup){
      // @ts-ignore
      if (this.TravelPersonData[e] instanceof FormControl){
        // @ts-ignore
        (this.TravelPersonData[e] as FormControl).setValue(masterDataGroup[e].value);
      }
      // tslint:disable-next-line:no-unused-expression
    }
  }

  private buildMasterDataSchema(age= 0, name  = '', lastName = '', email= ''): MasterDataControls{
    return {
      age: new FormControl(0, [Validators.required, Validators.min(14), Validators.pattern('[0-9]*')]),
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    };
  }
}
