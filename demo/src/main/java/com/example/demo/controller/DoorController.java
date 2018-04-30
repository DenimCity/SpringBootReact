package com.example.demo.controller;


import com.example.demo.model.Door;
import com.example.demo.services.DoorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
@CrossOrigin
public class DoorController {

    Logger LOGGER = Logger.getLogger(DoorController.class.getName());


    @Autowired
    DoorService doorService;

    @GetMapping("/")
    public List<Door> index(){
        LOGGER.severe("Error" + (new java.util.Random()).nextFloat());
        List<Door> doorList = doorService.doorInfo();
        return doorList;

    }
    @PostMapping("/doors/new")
    public Door hereNow(@RequestBody Door door){
        LOGGER.info("Hit the post route: ==> " + door.toString());
        doorService.insertDoor(door);
        return door;
    }

    @GetMapping("/doors/{doorsId}")
    public Door retrieveDoorFromList(@PathVariable String doorsId){
        LOGGER.info("Hit the grab  door route: ==> " + doorsId.toString());
        return doorService.retrieveDoors(doorsId);
    }

    
//    @DeleteMapping("/doors/{doorsId}")
//    public Door deleteDoorFromList(@PathVariable String doorsId){
//        LOGGER.info("Hit the delete door route: ==> " + doorsId.toString());
//        return doorService.deleteDoor(doorsId);
//    }
    
}

