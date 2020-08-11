import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddContact } from '../shared/state/demo.actions';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contact = {
    name: null,
    number: null
  }

  @ViewChild('contactForm', { static: false }) contactForm: NgForm;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  onSubmit(value: { name: string, number: number }) {
    this.store.dispatch(new AddContact(value)).subscribe(_ => {
      this.contactForm.reset();
    });
  }
}
