import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { DemoState } from '../state/demo.state';
import { Observable } from 'rxjs';
import { ContactItem } from 'src/app/shared/app.model';
import { RemoveContact } from '../state/demo.actions';

@Component({
  selector: 'app-ngxs-page',
  templateUrl: './ngxs-page.component.html',
  styleUrls: ['./ngxs-page.component.scss']
})
export class NgxsPageComponent implements OnInit {

  @Select(DemoState.filteredContacts) contacts$: Observable<ContactItem[]>;
  
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  removeContact(id: string) {
    this.store.dispatch(new RemoveContact(id));
  }

  trackContactByFn(_: number, contact: ContactItem) {
    return contact.id;
  }
}
