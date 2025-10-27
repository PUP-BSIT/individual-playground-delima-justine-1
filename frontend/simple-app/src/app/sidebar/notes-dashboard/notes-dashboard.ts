import { Component, input } from '@angular/core';
import { Note } from '../../../models/note.model';

@Component({
  selector: 'app-notes-dashboard',
  imports: [],
  templateUrl: './notes-dashboard.html',
  styleUrl: './notes-dashboard.scss'
})
export class NotesDashboard {
  notes = input(<Note[]>[]);
}
