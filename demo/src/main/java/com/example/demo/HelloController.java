package com.example.demo;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {
    @RequestMapping("/")
    public String index(){
        return "Hello World, we have THD landing page";
        // return "We have Doors";
    }
    @RequestMapping("/doors/new")
    public String hereNow(){
        return "Creating new doors";
    }
    @RequestMapping("/doors/delete")
    public String deleting(){
        return "Deleting doors ";
    }
    
}

