import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  imports: [ReactiveFormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  noteForm: FormGroup;
  formBuilder = inject(FormBuilder);

  constructor() {
    this.noteForm = this.formBuilder.group({
      title: [''],
      body: [''],
      date: ['']
    });
  }
}
