import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

export interface FormStateModel {
  newNgxsForm: {
    model: {
      search: string
    };
    dirty: boolean;
    status: string;
    errors: any;
  };
}

@State<FormStateModel>({
  name: 'form',
  defaults: {
    newNgxsForm: {
      model: {
        search: ""
      },
      dirty: false,
      status: '',
      errors: {}
    }
  }
})
@Injectable()
export class FormState {}
