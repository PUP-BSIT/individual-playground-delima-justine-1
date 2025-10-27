import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Note } from '../../models/note.model';
import { NotesDashboard } from "./notes-dashboard/notes-dashboard";

@Component({
  selector: 'app-sidebar',
  imports: [ReactiveFormsModule, NotesDashboard],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  noteForm: FormGroup;
  formBuilder = inject(FormBuilder);
  notes = signal(<Note[]>[]); 
  
  constructor() {
    const now = new Date();
    const hours: number = now.getHours();
    const minutes: number = now.getMinutes();
    const currentTime = signal(`${hours}: ${minutes}`);

    this.noteForm = this.formBuilder.group({
      title: [''],
      content: [''],
      timestamp: [`${currentTime()}`]
    });
  }

  addNote() {
    this.notes.set([...this.notes(), this.noteForm.value])
    console.log(this.noteForm.value);
    console.log(this.notes());
  }

  get currentTime() {
    return this.noteForm.get('timestamp')?.value;
  } 
}
