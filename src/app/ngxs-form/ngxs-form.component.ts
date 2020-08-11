import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ngxs-form',
  templateUrl: './ngxs-form.component.html',
  styleUrls: ['./ngxs-form.component.scss']
})
export class NgxsFormComponent implements OnInit {

  searchForm = this.fb.group({
    search: this.fb.control('')
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }
}
