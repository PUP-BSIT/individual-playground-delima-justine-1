package com.simple.app.simple_app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.simple.app.simple_app.models.Note;

public interface NoteRepo extends JpaRepository<Note, Integer> {
  
}
