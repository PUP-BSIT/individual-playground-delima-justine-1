package com.simple.app.simple_app.controllers;

import org.springframework.web.bind.annotation.RestController;
import com.simple.app.simple_app.models.Note;
import com.simple.app.simple_app.repo.NoteRepo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class SimpleAppController {

  @Autowired
  private NoteRepo noteRepo;

  @GetMapping("/")
  public String sayHello() {
    return "<h1>Hello SpringBoot!</h1>";
  }

  @GetMapping(value = "/notes")
  public List<Note> getNotes() {
    return noteRepo.findAll();
  }

  @PostMapping(value = "/add_note")
  public String addNote(@RequestBody Note note) {
    noteRepo.save(note);
    return "Note added!";
  }
}
