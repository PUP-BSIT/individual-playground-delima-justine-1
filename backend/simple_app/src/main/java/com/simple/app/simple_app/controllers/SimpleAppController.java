package com.simple.app.simple_app.controllers;

import org.springframework.web.bind.annotation.RestController;
import com.simple.app.simple_app.models.Note;
import com.simple.app.simple_app.repo.NoteRepo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class SimpleAppController {

  @Autowired // Setups the dependency injection.
  private NoteRepo noteRepo;

  @GetMapping("/") // Get Method
  public String sayHello() {
    return "<h1>Hello SpringBoot!</h1>";
  }

  @GetMapping(value = "/notes") // Get Method
  public List<Note> getNotes() {
    return noteRepo.findAll();
  }

  @PostMapping(value = "/add_note") // Post Method
  public String addNote(@RequestBody Note note) {
    noteRepo.save(note);
    return "Note added!";
  }
}
