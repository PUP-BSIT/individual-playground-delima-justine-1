import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { responseNote } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class Backend {
  http = inject(HttpClient);

  fetchNotes() {
    const url = `http://localhost:8080/notes`;
    return this.http.get<responseNote>(url);
  }
}
