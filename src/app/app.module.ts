import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighLightTextDirective } from './directive/highlightText.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { CustomValidatorComponent } from './components/custom-validator/custom-validator.component';
import { RendererHighLightDirective } from './directive/renderer-high-light.directive';
import { BorderDirective } from './directive/border.directive';
import { HoverDirective } from './directive/hover.directive';
import { NgIfDirective } from './directive_structural/ng-if.directive';
import { PracticePipeComponent } from './components/practice-pipe/practice-pipe.component';

import { CustomPipe } from './custom.pipe';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ReactiveFormComponent,
    FormBuilderComponent,
    CustomValidatorComponent,
    HighLightTextDirective,
    RendererHighLightDirective,
    BorderDirective,
    HoverDirective,
    NgIfDirective,
    PracticePipeComponent,
    CustomPipe,
    RxjsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
