export type Note = {
  title: string;
  content: string;
  timestamp: string;
}

export type responseNote = [{
  note_id: number;
  title: string;
  content: string;
  timestamp: string;
}]