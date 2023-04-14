import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { ReactiveFormsModule } from '@angular/forms';

import { HelloComponent } from './hello.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldCustomInput } from './custom.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'custom',
          component: FormlyFieldCustomInput,
          wrappers: ['form-field'],
          defaultOptions: {
            fieldGroup: [
              { type: 'input', key: 'name' },
              { type: 'input', key: 'profession' },
            ],
          },
        },
      ],
    }),
  ],
  declarations: [AppComponent, HelloComponent, FormlyFieldCustomInput],
  bootstrap: [AppComponent],
})
export class AppModule {}
