import { Component, inject, input } from '@angular/core';
import { Note } from '../../../models/note.model';
import { Backend } from '../../../service/backend';

@Component({
  selector: 'app-notes-dashboard',
  imports: [],
  template: '<button (click)="getNotes()">Fetch Notes</button>',
  styleUrl: './notes-dashboard.scss'
})
export class NotesDashboard {
  notes = input(<Note[]>[]);
  backendService = inject(Backend);

  getNotes() {
    this.backendService.fetchNotes()
      .subscribe(data => {
        const firstNote = data[0];
        console.log(data);
        console.log("Title: " + firstNote.title);
        console.log("Content: " + firstNote.content);
      })
  }
}
