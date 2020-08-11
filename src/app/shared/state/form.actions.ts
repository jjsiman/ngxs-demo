export class FormAction {
  static readonly type = '[Form] Add item';
  constructor(public payload: string) { }
}
