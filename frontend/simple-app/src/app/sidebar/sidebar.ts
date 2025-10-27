import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-sidebar',
  imports: [ReactiveFormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  noteForm: FormGroup;
  formBuilder = inject(FormBuilder);
  notes = signal(<Note[]>[]); 

  constructor() {
    this.noteForm = this.formBuilder.group({
      title: [''],
      content: [''],
      timestamp: ['']
    });
  }
}
