import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {DynoModule} from './components/dyno-wrapper/dyno-wrapper.component';
import {CommonModule} from '@angular/common';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { StepperFormsComponent } from './components/stepper-forms/stepper-forms.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomFormComponent } from './components/custom-form/custom-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperFormsComponent,
    CustomFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CdkStepperModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
