import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddContact, RemoveContact } from './demo.actions';
import { ContactItem } from 'src/app/shared/app.model';
import { FormState, FormStateModel } from './form.state';
import { patch, removeItem, append } from '@ngxs/store/operators';

export function _generateRandomId(): string {
  return '_' + Math.random().toString(36).substr(2, 9);
}

export interface DemoStateModel {
  contacts: ContactItem[];
}

const defaults = {
  contacts: [
    {
      id: _generateRandomId(),
      name: 'Juan Soto',
      number: 2020000001
    },
    {
      id: _generateRandomId(),
      name: 'Max Scherzer',
      number: 2020000002
    },
    {
      id: _generateRandomId(),
      name: 'Sean Doolittle',
      number: 2020000003
    },
    {
      id: _generateRandomId(),
      name: 'Howie Kendrick',
      number: 2020000004
    },
    {
      id: _generateRandomId(),
      name: 'Adam Eaton',
      number: 2020000005
    },
    {
      id: _generateRandomId(),
      name: 'Stephen Strasburg',
      number: 2020000006
    }
  ]
};

@State<DemoStateModel>({
  name: 'demo',
  defaults
})
@Injectable()
export class DemoState {

  @Selector([DemoState, FormState])
  static filteredContacts(state: DemoStateModel, formState: FormStateModel): ContactItem[] {
    return state.contacts.filter(item => item.name.includes(formState.newNgxsForm.model.search));
  }

  @Action(AddContact)
  addContact({ setState }: StateContext<DemoStateModel>, { payload }: AddContact) {
    const newContact: ContactItem = {
      ...payload,
      id: _generateRandomId(),
    }

    setState(
      patch({
        contacts: append([newContact])
      })
    );
  }

  @Action(RemoveContact)
  removeContact({ setState }: StateContext<DemoStateModel>, { payload }: RemoveContact) {
    setState(
      patch({
        contacts: removeItem<ContactItem>(contact => contact.id === payload)
      })
    );
  }
}
