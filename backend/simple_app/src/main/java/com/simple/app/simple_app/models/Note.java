package com.simple.app.simple_app.models;

import java.sql.Timestamp;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_note")
public class Note {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int note_id;

  @Column
  private String title;

  @Column
  private String content;

  @Column
  private Timestamp timestamp;

  public int getNote_id() {
    return note_id;
  }

  public void setNote_id(int note_id) {
    this.note_id = note_id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public Timestamp getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(Timestamp timestamp) {
    this.timestamp = timestamp;
  }

}
