import { ContactItem } from 'src/app/shared/app.model';

export class AddContact {
  static readonly type = '[Demo] Add contact';
  constructor(public payload: Pick<ContactItem, 'name' | 'number'>) { }
}

export class RemoveContact {
  static readonly type = '[Demo] Remove contact';
  constructor(public payload: string) { }
}

