package com.simple.app.simple_app;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class SimpleAppController {
  @GetMapping("/")
  public String sayHello() {
    return "<h1>Hello SpringBoot!</h1>";
  }
  // public String getMethodName(@RequestParam String param) {
  //     return new String();
  // }
  
}
